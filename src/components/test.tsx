import React from 'react';
import { Typography, Box } from '@mui/material';

// interface WeatherData {
//   city: string;
//   temperature: number;
//   humidity: number;
//   windSpeed: number;
// }

function Weather() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#e0e0e0' }}>
      <Typography variant="h3" gutterBottom>
        Bangkok
      </Typography>
      <Typography variant="h1" gutterBottom>
        32°c
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
        <Typography variant="h6" gutterBottom>
          Humidity
        </Typography>
        <Typography variant="h6" gutterBottom>
          50%
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
        <Typography variant="h6" gutterBottom>
          Wind Speed
        </Typography>
        <Typography variant="h6" gutterBottom>
          9 km/h
        </Typography>
      </Box>
    </Box>
  );
};

export default Weather;