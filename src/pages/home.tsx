import { Box, Typography } from "@mui/material"
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
                <Typography sx={{ fontWeight: 'bold', fontSize: "20px", display: 'flex', justifyContent: 'center', paddingTop: '2vh'}}>
                    กรุงเทพมหานคร
                </Typography>
            </Box>
            <Box component='div' sx={{ display: 'flex', alignItems: "center", justifyContent:'center'}}>
                <Box component="img" sx={{ backgroundColor:'red' ,height: "30vh", display:'flex', paddingTop: "2vh"}}
                    src='https://cdn4.iconfinder.com/data/icons/mini-material-design-weather-icons-multi-color/32/night_thunderstorm-512.png'/>
            </Box>
            <Typography>
                32c
            </Typography>
        </Box>
    )
}

export default Home