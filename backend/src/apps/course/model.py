from sqlmodel import Field, Relationship, SQLModel, create_engine
from pydantic import BaseModel
from src.apps.instructor.model import Instructor
from src.apps.student.model import Student
from src.apps.enrollment.model import StudentCourseLink
from src.apps.quiz.model import Quiz
from sqlalchemy import LargeBinary, Column, column, Integer, DateTime, func, ForeignKey
from datetime import datetime
from typing import Optional



class Course(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str

    instructor_id: int | None = Field(foreign_key="instructor.id")
    instructor: Instructor | None = Relationship(back_populates="courses")
    
    students: list[Student] = Relationship(back_populates="courses", link_model=StudentCourseLink)
    modules: list["Module"] = Relationship(back_populates="course")

    #audit fields
    created_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    updated_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    created_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), nullable=False))
    updated_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False))


class Module(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str

    course_id: int | None = Field(foreign_key="course.id")
    course: Course | None = Relationship(back_populates="modules")

    contents: list["Content"] = Relationship(back_populates="module")

    quizes: list["Quiz"] = Relationship(back_populates="module")

    #audit fields
    created_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    updated_by: Optional[int]= Field(default=None, sa_column=Column(Integer, ForeignKey("password.id", ondelete="CASCADE"), nullable=False))
    created_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), nullable=False))
    updated_at: Optional[datetime]=Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False))


# class Content(SQLModel, table=True):
#     id: int | None = Field(default=None, primary_key=True)
#     binary_data: bytes = Field(sa_column=Column(LargeBinary))

#     module_id: int | None = Field(foreign_key="module.id")
#     module: Module | None = Relationship(back_populates="contents")

