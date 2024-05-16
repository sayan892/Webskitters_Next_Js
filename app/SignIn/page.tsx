import { setCookie } from 'cookies-next';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
interface SignInFormProps {
  onSignIn: () => void;
}
const SignInPage: React.FC<SignInFormProps> = ({onSignIn}) => {
  const [formData, setFormData] = useState({ id: '', password: '' });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check credentials
    if (formData.id === 'webskitters' && formData.password === 'webskitters') {
      setCookie('loggedIn', 'true');
      onSignIn()
  
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID"
            name="id"
            autoFocus
            value={formData.id}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;
