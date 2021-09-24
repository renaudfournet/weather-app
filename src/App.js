import { Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardCity from './components/CardCity'

const baseURLParis = 'https://api.open-meteo.com/v1/forecast?latitude=48.8567&longitude=2.3510&current_weather=true'
const baseURLLondon = 'https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&current_weather=true'
const baseURLBerlin = 'https://api.open-meteo.com/v1/forecast?latitude=52.5235&longitude=13.4115&current_weather=true'
const baseURLMoscow = 'https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&current_weather=true'

function App() {
  const [paris, setParis] = useState(null)
  const [london, setLondon] = useState(null)
  const [berlin, setBerlin] = useState(null)
  const [moscow, setMoscow] = useState(null)

  useEffect(() => {
    axios.get(baseURLParis).then(response => {
      setParis(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get(baseURLLondon).then(response => {
      setLondon(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get(baseURLBerlin).then(response => {
      setBerlin(response.data)
    })
  }, [])

  useEffect(() => {
    axios.get(baseURLMoscow).then(response => {
      setMoscow(response.data)
    })
  }, [])
  console.log('PARIS', paris, 'LONDON', london, 'BERLIN', berlin)

  const cardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center'
  }

  if (!paris | !london | !berlin | !moscow) return null

  return (
    <>
      <div style={cardStyle}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={3}>
            <CardCity name={'Paris'} {...paris} />
          </Grid>
          <Grid item xs={3}>
            <CardCity name={'London'} {...london} />
          </Grid>
          <Grid item xs={3}>
            <CardCity name={'Berlin'} {...berlin} />
          </Grid>
          <Grid item xs={3}>
            <CardCity name={'Moscow'} {...moscow} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App
