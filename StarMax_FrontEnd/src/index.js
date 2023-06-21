import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const primaryTextColor = '#1Effff'; // Star wars Blue

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ddd', // black
    },
    secondary: {
      main: '#FFE81F', // star wars yellow
    },
    error: {
      main: '#FF0000', // Sith red
    },
    text: {
      primary: primaryTextColor, // Star wars Blue
      secondary: '#FFE81F', // star wars yellow
    },
  },
  typography: {
    allVariants: {
      color: primaryTextColor,
    },
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
  shape: {
    borderRadius: 7,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
