import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles


from api.api.v1 import api_router
from api.core import settings

# *******************************************************************************
# FASTAPI APP SETTINGS
# *******************************************************************************

app = FastAPI(
    title="Macaroon Demo API",
    description="Demo for explaining how to use Macaroon tokens \
        for authentication and distributed access.",
    version="1.0.0",
    contact={
        "name": "Samuel Valdes Gutierrez",
        "github": "https://github.com/BigSamu",
        "email": "valdesgutierrez@gmail.com",
    },
)

# *******************************************************************************
# DATABASE INITIALISATION
# *******************************************************************************

from api.database import init_database

# Initialise the database
init_database()

# *******************************************************************************
# CORS SETTINGS
# *******************************************************************************

origins = [
    "localhost:3000",
    "http://localhost",
    "http://localhost:3000",
    "https://localhost",
    "https://localhost:3000",
    "http://127.0.0.1:3000",
    "https://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


# *******************************************************************************
# ROUTE SETTINGS
# *******************************************************************************

app.include_router(api_router, prefix=settings.API_V1_STR)

# *******************************************************************************
# STATIC FOLDER SETTINGS
# *******************************************************************************

#  Make images folder statically available
app.mount("/static/images", StaticFiles(directory="api/static/images"), name="images")


# *******************************************************************************
# RUN SETTINGS
# *******************************************************************************

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
