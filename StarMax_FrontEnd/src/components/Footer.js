import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ 
        color: 'text.primary', 
        mt: 5, 
        py: 3,
    }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} StarMax. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="/About" color="inherit" underline="hover">
            About
          </Link>
          {' '}|{' '}
          <Link href="/contact" color="inherit" underline="hover">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
