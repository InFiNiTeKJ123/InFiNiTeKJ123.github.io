import { Box, Typography } from '@mui/material'
import React from 'react'

function Weather7days_widget(props) {
  return (
    <Box>
      <Typography variant='h5' sx={{ fontWeight: 'bold', paddingLeft: '2vh', paddingTop: '2vh'}}>
        Weather7days 
      </Typography>
      <Box>
          {props.sevenday_data?.['SevenDaysForecast'].map((item) => {
            return (
                          <Box key={item.id}>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', paddingLeft: '2vh', paddingTop: '2vh'}}>
                              {item.date}
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', paddingLeft: '2vh', paddingTop: '2vh'}}>
                              {item.temp}
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', paddingLeft: '2vh', paddingTop: '2vh'}}>
                              {item.weather}
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', paddingLeft: '2vh', paddingTop: '2vh'}}>
                              {item.wind}
                            </Typography>
                          </Box>
                        )
          })}
      </Box>
    </Box>
  )
}

export default Weather7days_widget