import React from 'react';
// import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// const useStyles = makeStyles({
//   aqi: {
//     fontSize: 48,
//     color: '#ff9800',
//   },
//   label: {
//     fontSize: 18,
//   },
//   value: {
//     fontSize: 24,
//   },
// });

interface AirQualityProps {
  aqi: number;
  label: string;
  value: number;
  unit?: string;
}

// const AirQuality: React.FC<AirQualityProps> = ({ aqi, label, value, unit }) => {
  // const classes = useStyles();
function AirQuality () {
  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h1" sx={{ fontSize: '48', color: '#ff9800'}}>
        50
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '18'}}>
        Hard
      </Typography>
      <Typography variant="h4" sx={{ fontsize: '24' }}>
        120 um
      </Typography>
    </Grid>
  );
};

export default AirQuality;