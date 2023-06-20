import React, { useState } from 'react';
import { Grid, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import StarshipCard from './StarshipCard';
import EditStarshipForm from './EditStarshipForm';


const StarshipList = ({ filteredStarships, fetchStarships }) => {

    const [openNew, setOpenNew] = useState(false);

    const handleOpenNew = () => {
        setOpenNew(true);
    };

    const handleCloseNew = () => {
        setOpenNew(false);
        handleStarshipCreated()
    };

    const handleStarshipDeleted = async () => {
        await fetchStarships();
    };

    const handleStarshipCreated = async () => {
        await fetchStarships();
    };
    
    return <Grid container
        sx={{
            border: '1px solid black',
            m: 1,
            borderRadius: 3,
            p: 2
        }}
        alignItems="stretch"
        spacing={0}
        id='starshipListGridContainer'
    >
        <Grid item xs={12} textAlign='center'>
            <Button sx={{mx: 2, p: 3}} variant="contained" color="primary" onClick={handleOpenNew}>
                Create New Starship
            </Button>
        </Grid>
        <Grid item xs={12}>
            <Dialog open={openNew} onClose={handleCloseNew}>
                <DialogTitle>Create New Starship</DialogTitle>
                <DialogContent>
                    <EditStarshipForm
                        starship={null}
                        onFormSubmit={handleCloseNew}
                        handleStarshipCreated={handleStarshipCreated} />
                </DialogContent>
            </Dialog>
        </Grid>
        {filteredStarships.map((starship, i) => (
            <Grid item
                key={i}
                xs={12}
                sm={6}
                md={6}
                lg={4} height='100%'
                className='startshipListGridItem'>
                <StarshipCard starship={starship} onDeleted={handleStarshipDeleted} />
            </Grid>
        ))}
    </Grid>;
}

export default StarshipList;