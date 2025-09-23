import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, Card, CardContent, Typography, TextField, Button, MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '', name: '', role: 'student' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    
    const endpoint = formData.role === 'student' ? 'student' : 'instructor';

    
    const payload: any = {
      username: formData.username,
      password: formData.password,
      name: formData.name,
    };

    if (formData.role === 'instructor') {
    
      payload.is_admin = true;
    }

    console.log("Payload sent:", payload);

    
    await axios.post(
      'http://localhost:8000/user/signup/' + endpoint,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    alert('Registration successful');
    navigate('/login');
  } catch (err: any) {
    console.error(err.response?.data);

    
    
      alert(
        err.response?.data?.detail ||
        JSON.stringify(err.response?.data) ||
        "Registration failed"
      );
    
  }
};

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Card sx={{ width: 400, p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Register</Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
            <TextField select fullWidth label="Role" name="role" value={formData.role} onChange={handleChange} margin="normal">
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="instructor">Instructor</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
            <Typography>
            <Link to = "/login">Back to Login page?</Link>
          </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
