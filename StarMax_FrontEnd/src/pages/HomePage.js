import React, { useMemo, useState, useEffect } from 'react';
import { Dialog, Box, Container, Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import StarshipCard from '../components/StarshipCard';

const HomePage = ({starships}) => {

  const [openStarship, setOpenStarship] = useState(null);

  const handleOpenStarship = (starship) => {
    setOpenStarship(starship);
  };
  
  const handleCloseStarship = () => {
    setOpenStarship(null);
  };

  const starshipsWithImages = useMemo(() => {
    if (!starships || starships.length < 4) return [];

    let indices = [];
    while (indices.length < 4) {
      let randomIndex = Math.floor(Math.random() * starships.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices.map(index => starships[index]);
  }, [starships]);


  return (
    <Box>
        <Box color="warning" 
          sx={{
            backgroundImage: `url(${'https://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            py: 10
          }}>
          <Container maxWidth="md" id='topContainer' 
            sx={{
              bgcolor: 'rgba(0,0,0,0.5)',
              py: 2,
              borderRadius: 1,
            }}>
            <Box>
              <Typography variant="h2">
                WELCOME TO STARMAX
              </Typography>
              <Typography variant="h4" gutterBottom>
                Love Your Starship  Guarantee®
              </Typography>
              <Typography variant="h6" gutterBottom>
              Take 30 Standard Earth days to love it or return it (up to 2 lightyears) 
              </Typography>
              <Button variant="contained" color="secondary" component={Link} to="/shop" mt={4}>
                Shop Now
              </Button>
            </Box>
          </Container>
        </Box>
      <Container maxWidth="md" sx={{
          borderRadius: 1,
          py: 2
        }}>
        <Typography variant="h3" 
          gutterBottom 
          sx={{
              bgcolor: 'rgba(0,0,0,0.5)',
              py: 2,
              borderRadius: 1,
              m: 1,
              textAlign: 'center',
              mb: 3
            }}>
          Featured Starships
        </Typography>
        <Grid container spacing={4}>
          {starshipsWithImages.map((starship, id) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={starship.image}
                  alt="starship"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {starship.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {starship.model}
                  </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" onClick={() => handleOpenStarship(starship)}>View Details</Button>                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Dialog open={!!openStarship} onClose={handleCloseStarship}>
        {openStarship && <StarshipCard starship={openStarship} onDeleted={handleCloseStarship} />}
      </Dialog>
    </Box>
  );
};

export default HomePage;
