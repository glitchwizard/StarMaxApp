import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Financing from './pages/Financing';
import './scrollbar.css';

const imgLinks = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUn4-ZOTsao-PEO_PS6CNSCI87hXLuypqQtLMDZFH61WCJVz2CQAYDm-Jzw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXIoQyDcjT9KBWrFinlUOAMt5yDo8tpsPsmtcFLJgkF7WjSmjAQwp2iNqk4g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyItFfcWSwdw7OnhzpqzzoRKhr7Ixxt1wfdHbzz8aRVnv9zWXhx-JXpv70dg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjnzFuyE9aW5b7M4EiJiFkaRRc5xGzmaqWzQsgcWBGUgjz7bBeL-ELX6wgCE&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-w11MfJCfbGoPbeRnuNfxspxbb4kQj2B8b92bPquNrCsRgVFOB3V4pS5lw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIPrSDGz1WxXjcOdWGT5X_s0pkUwnw8V_vq404x_tBbWRC59C36i0wCJ-w3kw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKGv3bgTjnIokhPG4N5UOhAke6m8gdpqD2qrrI5cDN0dCaPCZkNMiNyXfJFc&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9I72WUiz11eW8qBvgaUSLMeErrYx_4clQ5TqeDMtTVqfKA_It3tlopq2kpHY&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLF7WZPfsbAbTxFmSQLU_l6ouczhbqUDXRQ16b3IF2dBxYD-0nc8E31O0NQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeWGTDfel-Y8yQ2c9D3CoxJs-JWqcg1IlxWitCkEjc709yeNOQPCAPbm5zKI&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyg2Wo03EAXuYqjlWqpDmD1LTMqt9z41bZZcIhBbptiEGUAuAE-V3gZQVFsg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScN4efPKlKE__8eegs2xDHMJn2vPiEJIt19s1w0PZ5mM2BFwmKa4-PZRhvKw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwKYipTPsYfWxeINyWpJI26KoLwpVjVCpRjQImcuAvclu4t1JIRdJGBrBDw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4exjPWmjYtILizD6-vOGAZoPAzu5vEQzw8t-HyQwvjn5PWcKSnoEZpyiN2k&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKI-t2LLwYpYBTihtEfq7Grv3gz7GoieGW5fgfDG9FxNut5okM7oT2iTp0VM&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-wankr6l5SDjnwucnBAUINkX0OI4DkqlOWb2h5fGap4vaRFuVkNLWLmu0FA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2g10vQfIx9fGGl6hPxdLWjrdjcwThimUHMe8HC-LJhwgTFPa4T_zgWUe9g&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJdHwEtuCWI0x8P_vnjxy5HkraU90tqMwM4G8ja8K4aIX7QKeiFweJqunXQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vlN6K8TJOOmjT6TJflJgfcUfhWO3gs2Wuhv6CxXiMW6c3p-0BhZazgQW9ec&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8rvYAk_VIiD4IoOrby7BO9ixhD_OV5z82HGYCsdzEAMcfqPE6hqWPjP6Ng&s',
];

const fetchStarships = async (setStarshipsData, retries = 5) => {
  if (retries <= 0) return;

  try {
    const response = await axios.get('/api/Starships');
    if (response.data && response.data.length > 0) {
      const selectedStarships = response.data.map((starship) => ({
        ...starship,
        image: imgLinks[Math.floor(Math.random() * imgLinks.length)],
      }));
      setStarshipsData({ starships: selectedStarships, loading: false });
    } else {
      fetchStarships(setStarshipsData, retries - 1);
    }
  } catch (error) {
    console.error(`Error fetching starships: ${error.message}`);
    fetchStarships(setStarshipsData, retries - 1);
  }
};

const App = () => {
  const [starshipsData, setStarshipsData] = useState({ starships: [], loading: true });

  useEffect(() => {
    document.body.style.backgroundColor = `#111`;
    fetchStarships(setStarshipsData);
  }, []);

  return (
    <Router>
      <Box>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage starships={starshipsData.starships} imgLinks={imgLinks} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/finance" element={<Financing />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/shop"
            element={<ShopPage starshipsData={starshipsData} fetchStarships={() => fetchStarships(setStarshipsData)} />}
          />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;