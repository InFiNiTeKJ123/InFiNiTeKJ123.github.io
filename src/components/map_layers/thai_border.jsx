import React from 'react'
import { GeoJSON } from 'react-leaflet'
import Data from './map_data/ThaiMapData.json'
import { Box } from '@mui/material'

function ThaiBorder() {

  const mapstyle = {
    color: 'orange',
    fillColor: 'green',
    fillOpacity: '0',
    weight: '1.5',
  }

  return (
    <Box component='div'>
        <GeoJSON data={Data} style={mapstyle}/>
    </Box>

  )
}

export default ThaiBorder