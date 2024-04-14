import { Box } from "@mui/material"
import axios from "axios"
import React, { useState, useEffect } from "react"

function Home() {

    const [Todaydata, setTodaydata] = useState([])
    const getWeatherDataToday = async () => {
        const url = "https://data.tmd.go.th/api/WeatherToday/V2/?uid=api&ukey=api12345&format=json"
        await axios.get(url).then((res) => {
            setTodaydata(res.data)
            console.log(res.data)
        }).catch((err) => {console.log(err)});
    }

    useEffect(() => {
            getWeatherDataToday()
    }, [])


    return <Box>
        <h1>
            Home Page
        </h1>
    </Box>
}

export default Home