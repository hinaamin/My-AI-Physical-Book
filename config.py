"""
Configuration file for Physical AI Textbook RAG Chatbot Backend

This configuration uses the specific Qdrant and Neon credentials provided.
"""

import os
from typing import Optional

# Qdrant Configuration
QDRANT_CLUSTER_ID = "d3e5b58e-5688-444d-bf6e-10b0eb6c1e5a"
QDRANT_ENDPOINT = "https://d3e5b58e-5688-444d-bf6e-10b0eb6c1e5a.europe-west3-0.gcp.cloud.qdrant.io"
QDRANT_API_KEY = "G9bkUO-s"  # Note: Removed the *** prefix as it's likely part of the API key format
QDRANT_COLLECTION_NAME = "physical_ai_book"

# Neon PostgreSQL Configuration
NEON_DATABASE_URL = "postgresql://neondb_owner:npg_eJL0rvHDbU4E@ep-steep-bread-a4he6kw5-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# OpenAI Configuration
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")  # Should be set as environment variable
OPENAI_MODEL_ID = os.getenv("OPENAI_MODEL_ID", "gpt-4-turbo")
OPENAI_EMBEDDING_MODEL = os.getenv("OPENAI_EMBEDDING_MODEL", "text-embedding-3-large")

# Application Configuration
APP_TITLE = "Physical AI Textbook RAG Chatbot"
APP_VERSION = "1.0.0"
DEBUG = os.getenv("DEBUG", "False").lower() == "true"

# API Configuration
API_V1_STR = "/api/v1"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Database Configuration
DATABASE_POOL_SIZE = 20
DATABASE_TIMEOUT = 30

# Qdrant Vector Configuration
VECTOR_SIZE = 3072  # For text-embedding-3-large
DISTANCE_FUNCTION = "Cosine"
TOP_K_RETRIEVAL = 5
SCORE_THRESHOLD = 0.7

# Text Processing Configuration
CHUNK_SIZE = 400  # tokens
CHUNK_OVERLAP = 80  # tokens
MAX_TOKENS = 4096
TEMPERATURE = 0.1

# Session Configuration
SESSION_EXPIRY_HOURS = 24

# Rate Limiting
RATE_LIMIT_REQUESTS = 100  # per minute per user
RATE_LIMIT_WINDOW = 60  # seconds

# Security Configuration
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "").split(",")
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-here-replace-with-secure-key")
ALGORITHM = "HS256"

# Book Configuration
BOOK_TITLE = "Physical AI Textbook"
BOOK_SUBJECT = "Physical AI"
DEFAULT_COLLECTION_NAME = "physical_ai_book"

class Settings:
    """Application settings class"""

    # Qdrant Settings
    qdrant_cluster_id: str = QDRANT_CLUSTER_ID
    qdrant_endpoint: str = QDRANT_ENDPOINT
    qdrant_api_key: str = QDRANT_API_KEY
    qdrant_collection: str = QDRANT_COLLECTION_NAME

    # Neon Settings
    neon_database_url: str = NEON_DATABASE_URL

    # OpenAI Settings
    openai_api_key: str = OPENAI_API_KEY
    openai_model_id: str = OPENAI_MODEL_ID
    openai_embedding_model: str = OPENAI_EMBEDDING_MODEL

    # App Settings
    app_title: str = APP_TITLE
    app_version: str = APP_VERSION
    debug: bool = DEBUG

    # API Settings
    api_v1_str: str = API_V1_STR
    access_token_expire_minutes: int = ACCESS_TOKEN_EXPIRE_MINUTES

    # Database Settings
    database_pool_size: int = DATABASE_POOL_SIZE
    database_timeout: int = DATABASE_TIMEOUT

    # Vector Settings
    vector_size: int = VECTOR_SIZE
    distance_function: str = DISTANCE_FUNCTION
    top_k_retrieval: int = TOP_K_RETRIEVAL
    score_threshold: float = SCORE_THRESHOLD

    # Processing Settings
    chunk_size: int = CHUNK_SIZE
    chunk_overlap: int = CHUNK_OVERLAP
    max_tokens: int = MAX_TOKENS
    temperature: float = TEMPERATURE

    # Session Settings
    session_expiry_hours: int = SESSION_EXPIRY_HOURS

    # Rate Limit Settings
    rate_limit_requests: int = RATE_LIMIT_REQUESTS
    rate_limit_window: int = RATE_LIMIT_WINDOW

    # Security Settings
    allowed_origins: list = ALLOWED_ORIGINS

    # Book Settings
    book_title: str = BOOK_TITLE
    book_subject: str = BOOK_SUBJECT
    default_collection_name: str = DEFAULT_COLLECTION_NAME

    # Security Settings
    secret_key: str = SECRET_KEY
    algorithm: str = ALGORITHM


# Create settings instance
settings = Settings()


def validate_configuration():
    """Validate that all required configuration values are present"""
    errors = []

    if not settings.openai_api_key:
        errors.append("OPENAI_API_KEY is required and must be set as environment variable")

    if not settings.qdrant_api_key:
        errors.append("QDRANT_API_KEY is missing")

    if not settings.neon_database_url:
        errors.append("NEON_DATABASE_URL is missing")

    if errors:
        raise ValueError("Configuration validation failed:\n" + "\n".join(errors))

    print("Configuration validation passed successfully!")


# Validate configuration on import
if __name__ != "__main__":
    validate_configuration()