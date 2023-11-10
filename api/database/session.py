from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os

from api.core.config import settings

if os.getenv("ENVIRONMENT") == "production":
    engine = create_engine(settings.POSTGRES_URL)
else:
    # SQLite configuration for development
    engine = create_engine(
        settings.SQLITE_URL,
        connect_args={"check_same_thread": False},  # Required for SQLite
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
