import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { WiCloudy, WiDaySunny, WiDaySunnyOvercast, WiDayCloudy } from 'react-icons/wi'

export default function CardCity(props) {
  const renderWeathercode = () => {
    switch (props.current_weather.weathercode) {
      case (props.current_weather.weathercode = 0):
        return <WiDaySunny size={40} />
      case (props.current_weather.weathercode = 1):
        return <WiDaySunnyOvercast size={40} />
      case (props.current_weather.weathercode = 2):
        return <WiDayCloudy size={40} />
      case (props.current_weather.weathercode = 3):
        return <WiCloudy size={40} />
      default:
        return (
          <Typography variant="body2" color="text.secondary">
            Other Weather
          </Typography>
        )
    }
  }

  return (
    <Card sx={{ minWidth: '25%' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.current_weather.temperature}
          </Typography>
          {renderWeathercode()}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
