// ShopPage.js
import React, { useState } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material'; 
import StarshipList from '../components/StarshipList';
import SearchBar from '../components/SearchBar';

const ShopPage = ({ starshipsData, fetchStarships }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStarships = starshipsData.starships.filter(starship =>
        starship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box>
            <br />
            <SearchBar 
                starships={starshipsData.starships} 
                onSearchChange={setSearchTerm} 
                searchTerm={searchTerm}
            />
            {starshipsData.loading ? (
                <Box>
                    <Typography variant='body1'>
                        Loading... This will refresh once the ASP.NET backend has started.
                    </Typography>
                    <Box 
                        display='flex'
                        justifyContent='center' 
                        alignItems='top' 
                        height='100vh'
                    >
                        <CircularProgress />
                    </Box>
                </Box>
            ) : (
                <StarshipList 
                    filteredStarships={filteredStarships}
                    fetchStarships={fetchStarships}
                />
            )}
        </Box>
    );
}

export default ShopPage;
