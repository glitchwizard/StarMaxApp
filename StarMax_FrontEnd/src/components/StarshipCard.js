import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import EditStarshipForm from './EditStarshipForm';
import DeleteStarshipDialog from './DeleteStarshipDialog';

const StarshipCard = ({ starship, onDeleted}) => {

    const [openEdit, setOpenEdit] = useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    return (
        <Card sx={{border: '1px solid black', m: 2, p: 4}}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                    <CardContent sx={{
                        border: '1px solid gray',
                        borderRadius: '20px',
                    }}>
                        <Typography variant="h5" component="div">
                            {starship.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Model: {starship.model}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Manufacturer: {starship.manufacturer}
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
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Button sx={{ mx: 1 }} variant="contained" color="primary" onClick={handleOpenEdit}>
                        Edit
                    </Button>
                    <Dialog open={openEdit} onClose={handleCloseEdit}>
                        <DialogTitle>Edit Starship</DialogTitle>
                        <DialogContent>
                            <EditStarshipForm starship={starship} onFormSubmit={handleCloseEdit} />
                        </DialogContent>
                    </Dialog>
                    <DeleteStarshipDialog starship={starship} onDeleted={onDeleted} />
                </Grid>
            </Grid>
        </Card>
    );
};

export default StarshipCard;
