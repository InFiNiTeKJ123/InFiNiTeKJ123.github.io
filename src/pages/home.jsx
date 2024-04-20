import { Box, Grid, Typography, Autocomplete, TextField } from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"
import { provinces_region } from "../components/searchbar"
import provinces_thai_name from "../config/config"
import { formatDate } from "../config/config";
import Min_Max_Temp from "../components/Min_Max_Temp";
import PM from "../components/pm";
import Clear from './assets/sun.png'
import Heavy_Rain from './assets/storm.png'
import Cloud from './assets/cloud.png'
import Rain from './assets/rain.png'

function Home() {

    const [Todaydata, setTodaydata] = useState(null)
    const [SevenDaydata, setSevenDaydata] = useState(null)
    const [pm, setPM] = useState(null)
    const [city, setCity] = useState("Bangkok")
    const [cityThaiName, setCityThaiName] = useState("กรุงเทพมหานคร")

    const getlocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("lat = " + position.coords.latitude + ", lon = " + position.coords.longitude)
                    // setTimeout(() => {}, 1000)
                    setTimeout(() => {
                        getcitylocation(position.coords.latitude, position.coords.longitude)
                    }, 1000);
                    getWeatherDataToday(cityThaiName)
                    getWeatherData7Day(cityThaiName)
                },
                (error) => {
                    console.log(error)
                }
            )
        }
        else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    const getcitylocation = async (lat, lon) => {
        const url = `http://api.airvisual.com/v2/nearest_city?lat=${String(lat)}&lon=${String(lon)}&key=c3f68d2e-6bc9-4d70-a185-6cc6a7c76d77`
        await axios.get(url).then((response) => {
            // console.log(response.data.data)
            setPM(response.data.data.current)
            setCity(response.data.data.state)
            console.log(provinces_thai_name[`${response.data.data.city}`])
            setCityThaiName(provinces_thai_name[`${response.data.data.city}`])

        }).catch((error) => { console.log(error) })
    }

    const getPMData = (cityname) => {
    //    console.log("lat = " + lat + ", lon = " + lon)
        console.log('Get PM in city: ' + cityname)
        const url = `http://api.airvisual.com/v2/city?city=${String(cityname)}&state=${String(cityname)}&country=Thailand&key=c3f68d2e-6bc9-4d70-a185-6cc6a7c76d77`
        axios.get(url).then((response) => {
            console.log(response.data.data.current)
            setPM(response.data.data.current)
        }).catch((error) => { console.log(error) })
    }

    const getWeatherDataToday = async (citythainame) => {
        const url = "/api/Weather3Hours/V2/?uid=api&ukey=api12345&format=json"
        //const url = "https://data.tmd.go.th/api/Weather3Hours/V2/?uid=api&ukey=api12345&format=json"
        // console.log(citythainame)
        let Data = []
        await axios.get(url).then((res) => {
            Data = res.data.Stations.Station
            // console.log(Data)
        }).catch((err) => { console.log(err) });
        // console.log(Todaydata[99]['Province'])
        for (let i = 0; i < Data.length; i++) {
            if (Data[i]['Province'] == citythainame) {
                // console.log(citythainame)
                setTodaydata(Data[i])
                console.log(Data[i])
                break
            }
        }
    }

    const getWeatherData7Day = async (citythainame) => {
        const url = "/api/WeatherForecast7Days/v2/?uid=api&ukey=api12345&format=json"
        // const url = "https://data.tmd.go.th/api/WeatherForecast7Days/v2/?uid=api&ukey=api12345&format=json"
        let Data = []
        await axios.get(url).then((res) => {
            Data = res.data.Provinces.Province
            // console.log(Data)
        }).catch((err) => { console.log(err) });
        // console.log(Todaydata[99]['Province'])
        for (let i = 0; i < Data.length; i++) {
            if (Data[i]['ProvinceNameThai'] == citythainame) {
                // console.log(Data[i])
                setSevenDaydata(Data[i])
                break
            }
        }
    }

    const handlechange = (event, newvalue) => {
        const cityTHname = provinces_thai_name[`${newvalue.label}`]
        const cityname = newvalue.label
        setCity(newvalue.label)
        // setCityThaiName(provinces_thai_name[`${newvalue.label}`])
        setTimeout(() => {
            console.log('delay start')
            getWeatherDataToday(cityTHname)
            getWeatherData7Day(cityTHname)
            getPMData(cityname)
        }, 1000)
        

        console.log("Search for city " + newvalue.label)
    }

    useEffect(() => {
        // getlocation()
        getWeatherDataToday(cityThaiName)
        getWeatherData7Day(cityThaiName)
        getPMData(city)
    }, [])

    const weatherimg = (DescriptstionData) => {
        // console.log(DescriptstionData[6])
        var img = DescriptstionData[6]
        if (img == 'Heavy Rain') {
            // setWeatherIMG('../assets/strom.png')
            return Heavy_Rain
        }
        else if(img == 'Rain') {
            return Rain
        }
        else if (img == 'Clear') {
            // setWeatherIMG('../assets/sun.png')
            return Clear
        }
        else if (img == 'Partly Cloudy') {
            return Cloud
        }
    }

    const getBGcolor = (temp) => {
        if (temp > 30) {
            return 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        } else {
            return 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
        }
    }

    return (
        <Box >
            <Box sx={{ background: getBGcolor(Todaydata?.['Observation']['AirTemperature'] ?? 0), paddingBottom: '3vh' }}>
                <Box >
                    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", paddingTop: '2vh' }}>
                        {/* <SearchBar place_EN={city} set_place_EN={setCity} /> */}
                        <Autocomplete
                            disablePortal
                            freeSolo
                            id="provinces"
                            options={provinces_region}
                            groupBy={(option) => option.region} // Group by year as string
                            // getOptionLabel={(option) => `${option.name} - ${option.region}`}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Search" variant='filled' sx={{ backgroundColor: 'white', borderRadius: '1vh ' }} />}
                            // value={city}
                            onChange={handlechange}
                        />
                    </Box>
                    <Grid container xs={8} sx={{ paddingTop: '2vh' }}>
                        <Grid item>
                            <Typography variant='h4' sx={{ fontWeight: 'bold', paddingLeft: "2vh", color: 'white', fontsize: '50px' }}>
                                Weather Today
                            </Typography>
                            <Typography variant='h6' sx={{ paddingLeft: "2.5vh", color: 'white' }}>
                                {/* {Todaydata?.['Observation']['DateTime']} */}
                                {formatDate(Todaydata?.['Observation']['DateTime'])}
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* <Box sx={{ display: 'flex', alignItems: 'right', justifyContent: 'right', width: '100%' }}>
                                <IconButton sx={{ height: '5vh' }} onClick={getlocation}>
                                    <GpsFixedIcon sx={{ color: 'white' }} />
                                </IconButton>
                            </Box> */}
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', paddingTop: '2vh', width: 'auto', height: 'auto'}} >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '30px'}}>
                            {city ? city : 'N/A'}
                        </Typography>
                </Box>
                <Box component='div' sx={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                    {/* {weatherimg(SevenDaydata)} */}
                    {/* <Box component="img" sx={{ height: "20vh", display: 'flex', paddingTop: "2vh" }}
                        src={weatherimg(SevenDaydata?.['SevenDaysForecast']['DescriptionEnglish'])} /> */}
                    {SevenDaydata ? (
                        <Box component="img" sx={{ height: "18vh", display: 'flex', paddingTop: "2vh" }} src={weatherimg(SevenDaydata?.['SevenDaysForecast']['DescriptionEnglish'])} />
                    ) : (
                        <Box>Loading...</Box>
                    )}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '20vh', color: 'white' }}>
                    <Typography variant='h5' sx={{fontweight: 'bold', paddingBottom: '1vh'}}>
                        {SevenDaydata?.['SevenDaysForecast']['DescriptionEnglish'][6]}
                    </Typography>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'white' }}>
                        {Todaydata?.['Observation']['AirTemperature']}°c
                    </Typography>
                </Box>
                <Min_Max_Temp today_data={Todaydata} sevenday_data={SevenDaydata} />
            </Box>
            <PM data={pm} />
            {/* <Weather7days_widget sevenday_data2={SevenDaydata} /> */}
        </Box>
    )

}

export default Home