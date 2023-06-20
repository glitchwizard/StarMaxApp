import React from 'react';
import { TextField, InputAdornment, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';

function SearchBar({starships, onSearchChange, searchTerm}) {

  const handleSearchChange = (event, value) => {
    onSearchChange(value ? value.name : '');
};

  return (
<Container maxWidth="90%">
      <Autocomplete
        value={searchTerm}
        onChange={handleSearchChange}
        options={starships}
        isOptionEqualToValue={(option, value) => value ? option.name === value : true}
        getOptionLabel={(option) => typeof option === 'string' ? option : option.name}        renderInput={(params) => 
          <TextField
            {...params}
            id="starship-search"
            variant="outlined"
            placeholder="Search for a Starship"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: '100%', marginTop: 0 }} // Adjust this as needed
          />
        }
      />
    </Container>
  );
}

export default SearchBar;
