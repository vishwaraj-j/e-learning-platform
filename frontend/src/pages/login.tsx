import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, Card, CardContent, Typography, TextField, Button
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";


const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  
    try {
      const res = await axios.post('http://localhost:8000/user/token', new URLSearchParams(formData), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      const { access_token, user } = res.data;
      login(access_token, user);
      navigate('/welcome');
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Card sx={{ width: 400, p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} margin="normal" required />
            <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} margin="normal" required />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Log In</Button>
          </form>
          <Typography>
            New user? <Link to = "/register"> Register here</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
    

  );
};

export default Login;
