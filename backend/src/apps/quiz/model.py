from typing import Optional
from sqlmodel import Field, Relationship, SQLModel, create_engine
from pydantic import BaseModel
from sqlalchemy import LargeBinary, Column, column, Integer, DateTime, func, ForeignKey
from datetime import datetime

from src.apps.instructor.model import Instructor
# from src.apps.student.model import Student
from src.apps.enrollment.model import StudentCourseLink
# from src.apps.course.model import Module
from src.apps.Result.model import QuizResult
from src.apps.quizattempts.model import StudentQuizLink
from src.apps.user.model import Password


class Quiz(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    
    module_id: int | None = Field(foreign_key="module.id")
    module: Optional["Module"] = Relationship(back_populates="quizes")

    questions: list["Question"] = Relationship(back_populates="quiz")
    students: list["Student"] = Relationship(back_populates="quizes", link_model=StudentQuizLink)

    #audit fields
    created_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    updated_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    created_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), nullable=False))
    updated_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False))

class Question(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    question_content: str
    question_answers: str

    quiz_id: int | None = Field(foreign_key="quiz.id")
    quiz: Quiz | None = Relationship(back_populates="questions")

    #audit fields
    created_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    updated_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    created_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), nullable=False))
    updated_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False))


