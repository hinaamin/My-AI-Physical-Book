import os
import uuid
from openai import OpenAI
from qdrant_client import QdrantClient
from qdrant_client.http import models

# Configuration - Use environment variables for security
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "YOUR_OPENAI_KEY")
QDRANT_URL = os.getenv("QDRANT_URL", "https://d3e5b58e-5688-444d-bf6e-10b0eb6c1e5a.europe-west3-0.gcp.cloud.qdrant.io")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY", "d3e5b58e-5688-444d-bf6e-10b0eb6c1e5a_G9bkUO-s")

# Initialize OpenAI
client = OpenAI(api_key=OPENAI_API_KEY)

# Initialize Qdrant
qdrant = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY
)

def ensure_collection_exists():
    """Ensure the Qdrant collection exists with proper configuration"""
    try:
        # Check if collection exists
        qdrant.get_collection("book")
        print("Collection 'book' already exists")
    except:
        # Create collection if it doesn't exist
        qdrant.create_collection(
            collection_name="book",
            vectors_config=models.VectorParams(size=1536, distance=models.Distance.COSINE),  # Updated for text-embedding-3-small
        )
        print("Created new collection 'book'")

def read_book(folder="_chapters"):
    """Read all markdown files in the specified folder"""
    texts = []
    for file in os.listdir(folder):
        if file.endswith(".md"):
            file_path = os.path.join(folder, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
                # Extract metadata and content
                texts.append({
                    'content': content,
                    'source_file': file,
                    'folder': folder
                })
    return texts

def chunk_text(text, chunk_size=300, overlap=50):
    """
    Split text into overlapping chunks for better context retention
    """
    words = text.split()
    chunks = []

    for i in range(0, len(words), chunk_size - overlap):
        chunk = " ".join(words[i:i + chunk_size])
        if chunk.strip():  # Only add non-empty chunks
            chunks.append(chunk)

    return chunks

def generate_embeddings(texts):
    """Generate embeddings for a list of texts using OpenAI"""
    # OpenAI embedding models support batch processing
    embeddings = client.embeddings.create(
        model="text-embedding-3-small",  # Using 1536 dimensions
        input=texts
    )
    return [embedding.embedding for embedding in embeddings.data]

def ingest_book():
    """Ingest book content into Qdrant vector database"""
    ensure_collection_exists()

    book_data = read_book()  # Get book data with metadata
    all_chunks = []
    chunk_metadata = []

    # Prepare all chunks and metadata first
    for idx, book_item in enumerate(book_data):
        content = book_item['content']
        source_file = book_item['source_file']

        # Extract chapter info from filename
        chapter_name = source_file.replace('.md', '').replace('-', ' ').title()

        chunks = chunk_text(content)

        for j, chunk in enumerate(chunks):
            all_chunks.append(chunk)
            chunk_metadata.append({
                'source_file': source_file,
                'chapter': chapter_name,
                'chunk_index': j,
                'total_chunks': len(chunks),
                'text': chunk
            })

    # Process embeddings in batches to respect API limits
    batch_size = 20  # OpenAI allows up to 2048 texts per request, but 20 is safer
    for i in range(0, len(all_chunks), batch_size):
        batch_chunks = all_chunks[i:i + batch_size]
        batch_metadata = chunk_metadata[i:i + batch_size]

        # Generate embeddings for the batch
        embeddings = generate_embeddings(batch_chunks)

        # Prepare points for Qdrant
        points = []
        for k, (embedding, metadata) in enumerate(zip(embeddings, batch_metadata)):
            point_id = str(uuid.uuid4())  # Use UUID for unique IDs
            points.append(models.PointStruct(
                id=point_id,
                vector=embedding,
                payload=metadata
            ))

        # Upload batch to Qdrant
        qdrant.upsert(
            collection_name="book",
            points=points
        )

        print(f"Ingested batch {i//batch_size + 1}/{(len(all_chunks)-1)//batch_size + 1}")

    print(f"Ingestion completed! Total {len(all_chunks)} chunks ingested.")
    return len(all_chunks)

def search_similar(query, top_k=5):
    """Search for similar content in the vector database"""
    # Generate embedding for the query
    query_embedding = client.embeddings.create(
        model="text-embedding-3-small",
        input=query
    ).data[0].embedding

    # Search in Qdrant
    search_result = qdrant.search(
        collection_name="book",
        query_vector=query_embedding,
        limit=top_k
    )

    # Extract the relevant chunks
    results = []
    for hit in search_result:
        results.append({
            'text': hit.payload['text'],
            'source_file': hit.payload['source_file'],
            'chapter': hit.payload['chapter'],
            'score': hit.score
        })

    return results

# Run ingestion
if __name__ == "__main__":
    ingest_book()

