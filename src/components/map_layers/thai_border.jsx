import React from 'react'
import { GeoJSON } from 'react-leaflet'
import Data from './map_data/ThaiMapData.json'
import { Box } from '@mui/material'
import { red } from '@mui/material/colors'

function ThaiBorder() {

  const mapstyle = {
    color: 'orange',
    fillColor: 'green',
    fillOpacity: '0.15',
    weight: '0.5',
  }

  return (
    <Box component='div'>
        <GeoJSON data={Data} style={mapstyle}/>
    </Box>

  )
}

export default ThaiBorder