import React, { useState, useEffect } from 'react';
import StarshipCard from './components/StarshipCard';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, CircularProgress } from '@mui/material'; import EditStarshipForm from './components/EditStarshipForm';   

const App = () => {
    const [starships, setStarships] = useState({ starships: [], loading: true });
    const [openNew, setOpenNew] = useState(false);
    let fetchTimeoutId = null

    const handleOpenNew = () => {
        setOpenNew(true);
    };

    const handleCloseNew = () => {
        setOpenNew(false);
        handleStarshipCreated()
    };

    const fetchStarships = async () => {
        try {
            const response = await axios.get('/api/Starships');
            if (response.data && response.data.length > 0) {  // Assuming that an empty or missing array indicates no data
                setStarships({ starships: response.data, loading: false });  // loading is set to false here
                if (fetchTimeoutId) clearTimeout(fetchTimeoutId);  // Clear the timeout if the data has been successfully fetched
            } else {
                if (!fetchTimeoutId) fetchTimeoutId = setTimeout(fetchStarships, 5000);  // Retry after 5 seconds if no data
            }
        } catch (error) {
            console.error(`Error fetching starships: ${error.message}`);
            if (!fetchTimeoutId) fetchTimeoutId = setTimeout(fetchStarships, 5000);  // Retry after 5 seconds if there was an error
        }
    };

    useEffect(() => {
        fetchStarships();
        // Make sure to clear the timeout when the component is unmounted to prevent memory leaks
        return () => { if (fetchTimeoutId) clearTimeout(fetchTimeoutId); }
    }, [starships]);

    const handleStarshipDeleted = async () => {
        await fetchStarships();
    };

    const handleStarshipCreated = async () => {
        await fetchStarships();
    };

    let starshipsContents = starships.loading
        ? <p>
            <em>Loading... This will refresh once the ASP.NET backend has started.
            </em>
            <p />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100vh' }}>
                <CircularProgress />
            </div>
        </p>
        : (
        <div>
            <Button sx={{ mx: 1 }} variant="contained" color="secondary" onClick={handleOpenNew}>
                Create New Starship
            </Button>
            <Dialog open={openNew} onClose={handleCloseNew}>
                <DialogTitle>Create New Starship</DialogTitle>
                <DialogContent>
                        <EditStarshipForm
                            starship={null}
                            onFormSubmit={handleCloseNew}
                            handleStarshipCreated={handleStarshipCreated}
                        />
                </DialogContent>
            </Dialog>
            {starships.starships.map((starship, i) => (
                <div key={i}>
                    <StarshipCard starship={starship} onDeleted={handleStarshipDeleted} />
                </div>
            ))}
        </div>
        );

    return (
        <div>
            <h1 id="tabelLabel" >StarMax</h1>
            <p>This component demonstrates fetching data from the server.</p>

            {starshipsContents}
        </div>
    );
}

export default App;
