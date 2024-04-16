import { Box, Grid, Typography } from "@mui/material"
import axios from "axios"
import React, { useState, useEffect } from "react"
import SearchBar from "../components/searchbar"

function Home() {

    const [Todaydata, setTodaydata] = useState([])
    const getWeatherDataToday = async () => {
        const url = "https://data.tmd.go.th/api/WeatherToday/V2/?uid=api&ukey=api12345&format=json"
        await axios.get(url).then((res) => {
            setTodaydata(res.data)
            console.log(res.data)
        }).catch((err) => { console.log(err) });
    }

    useEffect(() => {
        getWeatherDataToday()
    }, [])


    return (
        <Box>
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", marginTop: "2vh" }}>
                <SearchBar />
            </Box>
            <Box sx={{ marginTop: "2vh" }}>
                <Typography sx={{ fontWeight: 'bold', paddingLeft: "2vh", fontSize: "20px" }}>
                    อากาศวันนี้
                </Typography>
                <Typography sx={{ paddingLeft: "2vh", fontSize: "16px" }}>
                    14 เมษายน 2567 เวลา 19:00
                </Typography>
            </Box>
            <Box component='div' sx={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                <Box component="img" sx={{ height: "20vh", display: 'flex', paddingTop: "2vh" }}
                    src='https://cdn4.iconfinder.com/data/icons/mini-material-design-weather-icons-multi-color/32/night_thunderstorm-512.png' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '20vh'}}>
                <Typography variant="h4" gutterBottom>
                    Bangkok
                </Typography>
                <Typography variant="h2" gutterBottom>
                    32°c
                </Typography>
            </Box>
            {Min_Max_Temp}
        </Box>
    )
}

const Min_Max_Temp = <Box>
    <Grid container spacing={2} columns={16}>
        <Grid item xs={8} sx={{ backgroundColor: 'red' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: 'black' }}>
                    Max
                </Typography>
                <Typography>
                    35°c
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={8} sx={{ backgroundColor: 'green' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: 'black' }}>
                    Min
                </Typography>
                <Typography>
                    20°c
                </Typography>
            </Box>
        </Grid>
    </Grid>
</Box>

export default Home