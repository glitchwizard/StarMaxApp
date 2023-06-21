import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Financing = () => {
  return (
    <Box bgcolor="#000" color="warning" minHeight="100vh" py={10}>
      <Container maxWidth="md">
        <Card variant="outlined" textAlign='center'>
          <CardContent>
            <Typography variant="h2" align="center" gutterBottom>
            SPACE FORTUNE AMPLIFIER
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
            STARMAX STARSHIP FINANCING
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              The Ultimate Solution for Your Financial Needs in the Star Wars Universe
            </Typography>
            <Container maxWidth="sm">
                <Typography variant="body1" align="center" gutterBottom>
                Are you dreaming of owning your own starship but lacking the credits to make it happen?
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                Look no further! StarMax offers the most innovative and cutting-edge financing options in the galaxy.
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                Whether you're a Jedi Knight, a Sith Lord, or just a humble moisture farmer, we've got you covered!
                </Typography>
            </Container>
          </CardContent>
        </Card>

        <Box my={4} maxWidth={"sm"} id='benefits' mx='auto'>
          <Typography variant="h6" align="center" gutterBottom>
            Benefits of Financing with StarMax:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Competitive Rates
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Our interest rates are tailored to your species and planetary system, ensuring you get the best deal in
                    the galaxy.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Flexible Repayment
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    We offer parsec-based installments and flexible repayment plans to fit your financial situation.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Instant Approval
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Qualified smugglers and scoundrels can enjoy instant approval for their starship financing needs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Exclusive Rewards
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Gain access to the latest starship models and modifications, along with exclusive membership rewards.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="secondary" component={Link} to="/contact">
            Contact Us to Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Financing;
