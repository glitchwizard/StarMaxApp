import React from 'react';
import { Box, Typography, Container, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Box py={10} color='primary.light'>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom align="center">
          About StarMax
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://1.bp.blogspot.com/-i7ktzX5iWFo/XS8530YpAgI/AAAAAAAA8EU/o0SmRT2Ou1AthSoZSqByQTkOSzlBrFUyQCLcBGAs/s1600/watto%2Bstar%2Bwars%2Bepisode%2Bone%2B1999.jpg"
                alt="The best salesman in the galaxy"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h5" paragraph>
                In a galaxy far, far away, full of starship dealers, there's only one you can trust—StarMax. We don't just sell starships; we sell dreams, adventure, and the freedom to explore the stars.
              </Typography>
              <Typography variant="h5" paragraph>
                At StarMax, our mission is simple: to put you in the cockpit of a starship that fits your lifestyle, your budget, and your dreams of cosmic exploration. Whether you're a spacefarer, a star trader, or a family needing to make that hyperspace hop to the next system, we've got you covered.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h5" paragraph>
                We pride ourselves on our vast selection of starships, from interstellar cruisers to lightning-fast starfighters, each carefully inspected by our team of expert engineers. With us, there's no haggling, no pressure, and no drama—just the peace of mind of our StarMax guarantee.
              </Typography>
              <Typography variant="h5" paragraph>
                We invite you to step into the future, to take control of your destiny among the stars. This isn't just about buying a starship. It's about starting your journey. The cosmos is waiting—are you ready?
              </Typography>
              <Box textAlign="center" mt={4}>
                <Typography variant="h6" paragraph>
                  <em>May the stars be with you.</em>
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/shop">
                  Start Your Journey
                </Button>
              </Box>
              
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://i.pinimg.com/originals/78/a9/ae/78a9aee689b080907ba3d86bad7cbaf2.jpg"
                alt="Starship interior"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
