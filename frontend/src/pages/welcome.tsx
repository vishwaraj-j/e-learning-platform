// src/pages/Welcome.tsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.name}!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You are logged in as <strong>{user?.role}</strong>
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ mt: 2 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Welcome;
