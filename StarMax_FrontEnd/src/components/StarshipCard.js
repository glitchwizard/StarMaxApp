import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StarshipCard = ({ starship }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {starship.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Model: {starship.model}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Manufacturer: {starship.Manufacturer}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Cost in Credits: {starship.costInCredits}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Length: {starship.length}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Max Atmosphering Speed: {starship.maxAtmospheringSpeed}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Crew: {starship.crew}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Passengers: {starship.passengers}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Cargo Capacity: {starship.cargoCapacity}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Consumables: {starship.consumables}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Hyperdrive Rating: {starship.hyperdriveRating}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    MGLT: {starship.mglt}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Starship Class: {starship.starshipClass}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    URL: {starship.url}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Created: {starship.created}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Edited: {starship.edited}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default StarshipCard;
