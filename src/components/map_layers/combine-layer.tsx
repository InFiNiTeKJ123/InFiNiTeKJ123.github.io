import { Box } from '@mui/material'
import React from 'react'
import { LayersControl } from 'react-leaflet'
import ThaiBorder from './thai_border'

function CombineLayer() {
  return (
    <Box component='div'> 
        <LayersControl position='topright'>
            <LayersControl.Overlay name='Thailand_border' checked>
                <ThaiBorder />
            </LayersControl.Overlay>
        </LayersControl>
    </Box>
  )
}

export default CombineLayer