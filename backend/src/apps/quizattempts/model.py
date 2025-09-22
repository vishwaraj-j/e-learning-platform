from typing import Optional
from sqlmodel import Field, Relationship, SQLModel, create_engine
from pydantic import BaseModel
from sqlalchemy import LargeBinary, Column, column, Integer, DateTime, func, ForeignKey
from datetime import datetime


# from src.apps.course.model import Module
from src.apps.Result.model import QuizResult

class StudentQuizLink(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    quiz_id: int | None = Field(foreign_key="quiz.id")
    student_id: int | None = Field(foreign_key="student.id")

    results: list["QuizResult"] = Relationship(back_populates="student_quiz")

    #audit fields
    created_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    updated_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    created_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), nullable=False))
    updated_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False))



