import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Min_Max_Temp(props: any) {
    return (<Box>
        <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Typography sx={{ paddingRight: '1vh', color: 'white' }}>
                        Max
                    </Typography> */}
                    <ArrowUpwardIcon sx={{ width: 'auto', height: '3vh', color: 'white', fontweight: 'bold', marginRight: '1vh' }} />
                    <Typography variant='h6' sx={{ color: 'white' }}>
                        {props.sevenday_data?.['SevenDaysForecast']['MaximumTemperature'][6]} °c
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Typography sx={{ color: 'white', paddingRight: '1vh', fonsize: '18px' }}>
                        Min
                    </Typography> */}
                    <ArrowDownwardIcon sx={{ width: 'auto', height: '3vh', color: 'white', fontweight: 'bold', marginRight: '1vh' }} />
                    <Typography variant='h6' sx={{ color: 'white' }}>
                        {props.sevenday_data?.['SevenDaysForecast']['MinimumTemperature'][6]} °c
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <WaterDropIcon sx={{ width: 'auto', height: '3vh', color: 'white' }} />
                    <Typography variant='h6' sx={{ color: 'white' }}>
                        {props.today_data?.['Observation']['Rainfall']} mm
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <AirIcon sx={{ width: 'auto', height: '3vh', color: 'white' }} />
                    <Typography variant='h6' sx={{ color: 'white' }}>
                        {props.today_data?.['Observation']['WindSpeed']} km/h
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
}
