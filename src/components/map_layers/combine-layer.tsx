import { Box } from '@mui/material'
import React from 'react'
import { LayerGroup, LayersControl } from 'react-leaflet'
import ThaiBorder from './thai_border'
import WeatherLayer from './weatherlayer'


function CombineLayer() {
  return (
    <Box component='div'> 
        <LayersControl position='topright'>
            <LayersControl.Overlay name='Thailand_border' checked>
                <ThaiBorder />
            </LayersControl.Overlay>

            <LayersControl.Overlay name='Weather' checked>
              <LayerGroup>
                <WeatherLayer />
              </LayerGroup>
            </LayersControl.Overlay>
        </LayersControl>
    </Box>
  )
}

export default CombineLayer