from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from api.core.config import settings

engine = create_engine(settings.POSTGRES_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
