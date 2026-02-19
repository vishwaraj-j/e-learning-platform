from typing import Optional
from sqlmodel import Field, Relationship, SQLModel, create_engine
from pydantic import BaseModel
from sqlalchemy import LargeBinary, Column

from src.apps.instructor.model import Instructor
from src.apps.student.model import Student
from src.apps.enrollment.model import StudentCourseLink
from datetime import datetime
from sqlalchemy import LargeBinary, Column, column, Integer, DateTime, func, ForeignKey
# from src.apps.course.model import Module



class Content(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    
    title: str = Field(nullable = False)
    
    description: Optional[str] = None
    
    file_url: str = Field(nullable=False)
    
    file_type: str = Field(nullable=False)
    # uploaded_at: datetime =  Field(default_factory=datetime.utcnow)
    
    module_id: int | None = Field(foreign_key="module.id")
    
    module: Optional["Module"] = Relationship(back_populates="contents")
    
    #audit fields
    created_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    
    updated_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    
    created_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), nullable=False))
    updated_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False))

