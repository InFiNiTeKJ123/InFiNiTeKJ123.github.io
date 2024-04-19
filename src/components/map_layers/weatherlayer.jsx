import { Box } from '@mui/material'
import { Marker, Tooltip } from 'react-leaflet'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../App.css'

import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function WeatherLayer() {
    const [Data, setData] = useState([])

    const url = "api/Weather3Hours/V2/?uid=api&ukey=api12345&format=json"

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        await axios.get(url).then((response) => {
            setData(response.data)
            // console.log(response.data.Stations.Station)
        }).catch((err) => { console.log(err) });
    }

    const tempicon = (temp) => {
        let tempcolor = 'map-label-content'
        if(temp > 35) {
            tempcolor += ' red'
        }
        else if(temp > 30) {
            tempcolor += ' orange'
        }
        else if(temp > 25) {
            tempcolor += ' yellow'
        }

        return new L.divIcon({
            classNames: 'map-label',
            html: `<div class="map-label"> <div class="map-label ${tempcolor}">${temp}°c</div> </div>`
        })
    }

    return (
        <Box component='div'>
            {
                Data.Stations?.Station.map((item) => {
                    // console.log(item.Latitude)
                    return <Marker position={[item.Latitude, item.Longitude]} icon={tempicon(item.Observation.AirTemperature)}>
                        <Tooltip>
                            Province: {item.Province}
                            <br/>
                            Temperature: {item.Observation.AirTemperature}°c
                        </Tooltip>
                    </Marker>
                })
            }
        </Box>
    )
}

export default WeatherLayer