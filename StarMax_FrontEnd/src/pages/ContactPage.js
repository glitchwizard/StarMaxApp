import React from 'react';
import { Card, Box, TextField, Button, Typography } from '@mui/material';

const ContactPage = () => {
  return (
    <Card maxWidth="xs" height='100%' sx={{m: 8, p: 2}}>
      <Typography variant="h4" align="center" gutterBottom>Contact Us</Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="name" label="Your Name" variant="outlined" />
        <TextField id="email" label="Your Email" variant="outlined" />
        <TextField id="message" label="Your Message" variant="outlined" multiline rows={4} />
        <Button variant="contained" color="secondary" type="submit" sx={{mx: '35%'}}>
          Submit
        </Button>
      </Box>
    </Card>
  );
};

export default ContactPage;
