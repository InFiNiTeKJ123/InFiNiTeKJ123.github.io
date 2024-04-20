import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'


const pollutiontext = (aqius) => {
    if( 0 <= aqius && aqius <= 50) {
        return (
        <Typography variant="h3" sx={{ color:'white' }}>Good</Typography>
        )
    }
    else if(51 <= aqius && aqius <= 100) {
        return (
        <Typography variant="h3" sx={{ color:'white' }}>Moderate</Typography>)
    }
    else if(101 <= aqius && aqius <= 150) {
        return (
        <Typography variant="h5" sx={{ color:'white' }}>Unhealthy for Sensitive Groups</Typography>)
    }
    else if(151 <= aqius && aqius <= 200) {
        return (
        <Typography variant="h3" sx={{ color:'white' }}>Unhealthy</Typography>)
    }
    else if(201 <= aqius && aqius <= 300) {
        return (
        <Typography variant="h3" sx={{ color:'white' }}>Very Unhealthy</Typography>)
    }
    else if(301 <= aqius && aqius <= 500) {
        return (
        <Typography variant="h3" sx={{ color:'white' }}>Hazardous</Typography>)
    }
}

const pollutioncolor = (aqius) => {
    if( 0 <= aqius && aqius <= 50) {
        return '#ABD162'
    }
    else if(51 <= aqius && aqius <= 100) {
        return '#F7D460'
    }
    else if(101 <= aqius && aqius <= 150) {
        return '#FC9956'
    }
    else if(151 <= aqius && aqius <= 200) {
        return '#F6676B'
    }
    else if(201 <= aqius && aqius <= 300) {
        return '#A37DB8'
    }
    else if(301 <= aqius && aqius <= 500) {
        return '#A07684'
    }
}
function PM(props) {

    return (
        <Box sx={{ paddingTop: '2vh', paddingBottom: '2vh', backgroundColor: pollutioncolor(props.data?.['pollution']['aqius'])}}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', paddingLeft: '2vh', color:'white' }}>
                PM 2.5
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '5vh' }}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{color:'white', paddingRight: '2vh'}}>
                            {props.data?.['pollution']['aqius']}
                        </Typography>
                        <Typography sx={{ fontSize: '18',color:'white' }}>
                            US AQI
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        {pollutiontext(props.data?.['pollution']['aqius'])}
                    </Grid>
                </Grid>

            </Box>
        </Box>
  )
}

export default PM