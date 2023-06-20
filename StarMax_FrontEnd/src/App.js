import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Box, } from '@mui/material'; 
import StarshipList from './components/StarshipList';
import TransparentHeader from './components/Header';
import SearchBar from './components/SearchBar';

const App = () => {
    const [starshipsData, setStarshipsData] = useState({ starships: [], loading: true });
    const [searchTerm, setSearchTerm] = useState('');
    let fetchTimeoutId = null



    const fetchStarships = async () => {
        try {
            const response = await axios.get('/api/Starships');
            if (response.data && response.data.length > 0) {  // Assuming that an empty or missing array indicates no data
                setStarshipsData({ starships: response.data, loading: false });  // loading is set to false here
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
    });

    const filteredStarships = searchTerm
    ? starshipsData.starships.filter(
        (starship) => {
            return starship.name.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
        }
    )        
    : starshipsData.starships;
    
    return (
        <Box>
            <TransparentHeader />
            <br />
            <SearchBar starships={starshipsData.starships} onSearchChange={setSearchTerm} searchTerm={searchTerm}/>            
            {starshipsData.loading
                ? <p>
                    <em>Loading... This will refresh once the ASP.NET backend has started.
                    </em>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', height: '100vh' }}>
                        <CircularProgress />
                    </div>
                </p>
                : (
                    <StarshipList 
                    filteredStarships={filteredStarships}
                    fetchStarships={fetchStarships}
                    />
            )}
        </Box>
    );
}

export default App;
