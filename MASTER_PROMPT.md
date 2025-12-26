You are Claude Code, acting as a senior full-stack AI engineer, RAG architect, and technical writer.

Your task is to COMPLETE and MAKE RUNNING an existing unified book project with the following goals:

AI/Spec-Driven Book (Docusaurus)

Integrated Production-Grade RAG Chatbot

Personalization, Translation, and Auth

=====================================
PROJECT OVERVIEW
=====================================

You are building a complete AI-powered digital textbook platform with:
- A Docusaurus-based book frontend
- Production-grade RAG chatbot backend
- User authentication and personalization
- Multi-language support and translation
- All components integrated seamlessly

=====================================
TECHNOLOGY STACK (MANDATORY)
=====================================

Frontend:
- Docusaurus v3+ (React-based)
- TypeScript
- Tailwind CSS or custom styling

Backend:
- FastAPI (Python 3.11+)
- OpenAI Agents SDK
- Qdrant Cloud (vector database)
- Neon Serverless PostgreSQL
- Async architecture

AI Components:
- OpenAI GPT models
- Embedding models (text-embedding-3-large)
- RAG architecture
- Context-bound responses

Authentication:
- JWT-based auth
- User sessions
- Role-based access

=====================================
CORE COMPONENTS TO IMPLEMENT
=====================================

1. Docusaurus Book Frontend
- Book content in MDX format
- Search functionality
- Navigation system
- Responsive design
- Integration points for RAG chatbot

2. RAG Chatbot Backend
- OpenAI Agents SDK integration
- Qdrant vector database integration
- Neon PostgreSQL for metadata
- Dual mode: RAG and selected-text-only
- Hallucination prevention

3. Authentication System
- User registration/login
- JWT token management
- Session handling
- User profiles and preferences

4. Personalization Engine
- User reading history
- Customizable UI themes
- Personalized content recommendations
- Bookmarking and notes

5. Translation System
- Multi-language support
- Dynamic language switching
- Content translation API
- Language preference persistence

=====================================
SPECIFIC IMPLEMENTATION REQUIREMENTS
=====================================

1. BOOK INGESTION PIPELINE
- Convert book content to searchable format
- Create embeddings for RAG system
- Store metadata in PostgreSQL
- Handle equations, figures, code blocks properly

2. RAG ARCHITECTURE
- Dual mode operation (RAG + selected-text)
- Context-bound responses (no hallucinations)
- Vector similarity search
- Response attribution to sources

3. FRONTEND INTEGRATION
- Floating chat widget
- Text selection detection
- Context-aware interactions
- Real-time responses

4. SECURITY MEASURES
- Input validation and sanitization
- Rate limiting
- Authentication for all endpoints
- Secure credential handling

=====================================
FILE STRUCTURE (MANDATORY)
=====================================

project-root/
├── frontend/                 # Docusaurus book
│   ├── docs/                 # Book content
│   ├── src/                  # Custom components
│   ├── static/               # Static assets
│   ├── docusaurus.config.js  # Docusaurus config
│   └── package.json          # Dependencies
├── backend/                  # FastAPI backend
│   ├── app/                  # Main application
│   │   ├── main.py           # Application entry point
│   │   ├── api/              # API routes
│   │   ├── models/           # Data models
│   │   ├── schemas/          # Pydantic schemas
│   │   ├── database/         # DB operations
│   │   ├── vector_db/        # Qdrant operations
│   │   ├── ai_agents/        # OpenAI Agents
│   │   ├── auth/             # Authentication
│   │   └── services/         # Business logic
│   ├── requirements.txt      # Python dependencies
│   └── config.py             # Configuration
├── shared/                   # Shared utilities
│   ├── types/                # Shared TypeScript types
│   └── utils/                # Shared utilities
├── tests/                    # Test files
├── docker-compose.yml        # Container orchestration
├── .env.example              # Environment variables
└── README.md                 # Documentation

=====================================
API CONTRACTS (REQUIRED)
=====================================

Backend Endpoints:
- POST /api/v1/chat - Chat with RAG
- POST /api/v1/select-text - Handle text selection
- GET /api/v1/chat/history - Get chat history
- POST /api/v1/auth/register - User registration
- POST /api/v1/auth/login - User login
- POST /api/v1/ingest/book - Book ingestion
- GET /api/v1/user/profile - User profile
- PUT /api/v1/user/preferences - User preferences

Frontend Integration:
- WebSocket connection for real-time chat
- REST API calls for authentication
- Context injection for selected text
- Session management

=====================================
DATABASE SCHEMAS (REQUIRED)
=====================================

PostgreSQL Tables:
- users: id, email, password_hash, created_at, preferences
- books: id, title, subject, content_metadata
- chat_sessions: id, user_id, book_id, thread_id, created_at
- chat_messages: id, session_id, role, content, context_type, created_at
- user_preferences: id, user_id, language, theme, accessibility
- selected_text_context: id, session_id, text, page_ref, created_at

Qdrant Collection:
- Vectors: 3072 dimensions (text-embedding-3-large)
- Payload: book_id, chapter, page, section, text, metadata
- Distance: Cosine similarity

=====================================
RAG IMPLEMENTATION (CRITICAL)
=====================================

1. OPENAI AGENT CONFIGURATION
- Assistant with strict context rules
- Retrieval tool for Qdrant integration
- No external tools allowed
- Hallucination prevention instructions

2. DUAL MODE LOGIC
- RAG Mode: Vector search + context injection
- Selected-Text Mode: Direct context injection only
- Mode detection based on request parameters
- Strict boundary enforcement

3. CONTEXT MANAGEMENT
- Thread-based conversation memory
- Session persistence
- Context attribution
- Source verification

=====================================
FRONTEND INTEGRATION (CRITICAL)
=====================================

1. CHAT WIDGET
- Floating design that doesn't obstruct reading
- Text selection detection
- Context-aware mode switching
- Real-time messaging

2. BOOK INTERACTIONS
- Text selection highlighting
- "Ask about this" context menu
- Page/section awareness
- Synchronized scrolling

3. USER EXPERIENCE
- Responsive design
- Accessibility compliance
- Loading states
- Error handling

=====================================
SECURITY & VALIDATION (MANDATORY)
=====================================

- JWT token validation for all protected endpoints
- Rate limiting (100 requests/minute/user)
- Input sanitization and validation
- SQL injection prevention
- XSS protection
- CSRF protection
- Secure credential handling

=====================================
ENVIRONMENT VARIABLES (REQUIRED)
=====================================

BACKEND:
- OPENAI_API_KEY
- OPENAI_MODEL_ID
- QDRANT_URL
- QDRANT_API_KEY
- QDRANT_COLLECTION
- DATABASE_URL
- SECRET_KEY
- ALGORITHM
- ACCESS_TOKEN_EXPIRE_MINUTES

FRONTEND:
- REACT_APP_API_URL
- REACT_APP_OPENAI_API_KEY (if needed client-side)

=====================================
DEPLOYMENT REQUIREMENTS
=====================================

- Docker containerization
- Environment-based configuration
- Health checks
- Logging and monitoring
- SSL/HTTPS support
- CDN for static assets

=====================================
QUALITY REQUIREMENTS
=====================================

- Type safety (TypeScript + Python type hints)
- Comprehensive error handling
- Proper documentation
- Unit and integration tests
- Performance optimization
- Production-ready code

=====================================
OUTPUT REQUIREMENTS
=====================================

1. Complete, running codebase
2. Proper documentation
3. Environment configuration
4. Deployment instructions
5. Test coverage
6. Performance benchmarks

=====================================
FINAL VALIDATION
=====================================

Before marking complete:
- All endpoints return valid responses
- RAG chatbot answers from book context only
- Selected-text mode works without vector search
- Authentication protects user data
- Frontend integrates seamlessly with backend
- No hardcoded credentials in code
- All security measures implemented
- Performance meets requirements