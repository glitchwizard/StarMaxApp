import React, { useState, useEffect } from 'react';
import { Dialog, Box, Container, Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import StarshipCard from '../components/StarshipCard';


const HomePage = ({starships, imgLinks}) => {

  const [starshipsWithImages, setStarshipsWithImages] = useState([]);
  const [openStarship, setOpenStarship] = useState(null);

  const handleOpenStarship = (starship) => {
    setOpenStarship(starship);
  };
  
  const handleCloseStarship = () => {
    setOpenStarship(null);
  };

  const getRandomImage = (imageArray) => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
  };
  
  useEffect(() => {

    const getRandomStarships = (starships) => {
      let selectedStarships = [];
      let indices = [];
      while (selectedStarships.length < 4) {
        let randomIndex = Math.floor(Math.random() * starships.length);
        if (!indices.includes(randomIndex)) {
          selectedStarships.push(starships[randomIndex]);
          indices.push(randomIndex);
        }
      }
      return selectedStarships;
    };

    if(starships && starships.length >= 4){
      const selectedStarships = getRandomStarships(starships);
      const newStarships = selectedStarships.map(starship => ({
        ...starship,
        image: getRandomImage(imgLinks),
      }));
      setStarshipsWithImages(newStarships);
    }
  }, [starships]);

  return (
    <Box>
      <Box color="warning" 
        sx={{
          backgroundImage: `url(${'https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg'})`,
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
            <Typography variant="h3" >
              WELCOME TO STARMAX
            </Typography>
            <Typography variant="h5" gutterBottom>
              Discover a starship like no other!
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
              textAlign: 'center'
            }}>
          Featured Starships
        </Typography>
        <Grid container spacing={4}>
          {starshipsWithImages.map((starship, id) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Card>
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
