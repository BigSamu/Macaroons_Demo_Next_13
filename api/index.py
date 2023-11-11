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

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

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
    "http://127.0.0.1",
    "http://127.0.0.1:3000",
    "https://127.0.0.1:3000",
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

@app.get("/static/images/{file_name}")
async def serve_image(file_name: str):
    # Ensure the file name ends with '.jpg'
    if not file_name.lower().endswith(".jpg"):
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Define the directory containing the images
    image_directory = os.path.join(os.getcwd(), 'static', 'images')

    # Construct the full file path
    file_path = os.path.join(image_directory, file_name)

    # Check if the file exists
    if not os.path.isfile(file_path):
        raise HTTPException(status_code=404, detail="File not found")

    # Open and return the file content
    with open(file_path, 'rb') as file:
        return Response(content=file.read(), media_type="image/jpg")

# *******************************************************************************
# RUN SETTINGS
# *******************************************************************************

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
