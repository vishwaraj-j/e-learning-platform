from pydantic import BaseModel
from typing import Optional

class Token(BaseModel):
    access_token: str
    token_type: str

class UserOut(BaseModel):
    username:str
    name:str
    role:str
class TokenwithUser(BaseModel):
    access_token:str
    token_type:str
    user:UserOut
    
    class Config:
        orm_mode = True


class TokenData(BaseModel):
    username: Optional[str] = None
    role: Optional[str] = None

class SignupBase(BaseModel):
    username: str
    password: str
    name: str

class StudentSignup(SignupBase):
    pass

class InstructorSignup(SignupBase):
    is_admin: bool

class ShowStudent(BaseModel):
    username: str
    name: str

class ShowInstructor(BaseModel):
    username: str
    name: str
