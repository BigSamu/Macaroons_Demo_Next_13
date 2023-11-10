import secrets

from pathlib import Path
from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    # PATH SETTINGS
    API_V1_STR: str = "/api/v1"  # Prefix URL for API version
    BASE_PATH: Path = (
        Path(__file__).resolve().parent.parent
    )  # Base Path for accessing SEG-Y file

    # MACAROON SETINGS
    MACAROON_SECRET_KEY: str = "secret"
    # secrets.token_urlsafe(32)

    # CSRF SETINGS
    CSRF_SECRET_KEY: str = secrets.token_urlsafe(32)

    # DATABASE SETTINGS
    POSTGRES_URL: str # Database Location

    class Config:
        env_file = ".env"


settings = Settings()
