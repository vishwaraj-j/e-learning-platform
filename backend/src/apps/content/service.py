import os
import shutil
from datetime import datetime
from sqlmodel import Session
from fastapi import UploadFile
from . import schemas, model
from fastapi import HTTPException, status  
from src.apps.user.model import Password
UPLOAD_DIR = "uploads"
ALLOWED_EXTENSIONS = {"ppt", "pptx", "txt", "docx", "jpg", "jpeg", "png", "mp4"}
ALLOWED_MIME_TYPES = {
    "application/vnd.ms-powerpoint",   
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",  
    "text/plain",  
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",  
    "image/jpeg",  
    "image/png",   
    "video/mp4"    
}



async def create_content(content_data: schemas.ContentCreate, file: UploadFile, db: Session, current_user:Password):
    
    ext = file.filename.split(".")[-1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"File type '.{ext}' not allowed. Allowed: {', '.join(ALLOWED_EXTENSIONS)}"
        )
    
    if file.content_type not in ALLOWED_MIME_TYPES:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"MIME type '{file.content_type}' not allowed."
        )

    os.makedirs(UPLOAD_DIR, exist_ok=True)
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    new_content = model.Content(
        title=content_data.title,
        description=content_data.description,
        file_url=file_path,
        file_type=file.content_type,
        uploaded_at=datetime.utcnow(),
        
        
    )
    
    new_content.created_by = current_user.id
    new_content.updated_by = current_user.id    
    db.add(new_content)
    db.commit()
    db.refresh(new_content)
    return new_content

async def get_content(content_id: int, db: Session):
    content = db.get(model.Content, content_id)
    if not content:
        raise ValueError(f"Content with id={content_id} not found")
    return content

