import axios from 'axios'
import React from 'react'
import 'dotenv/config'
import CardCity from './components/CardCity'
import './App.css'

const API_Key = process.env.REACT_APP_API_Key
const baseURLParis = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=48.8567,2.3508 Paris&aqi=no`
const baseURLLondon = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=51.5073509,-0.1277583 London&aqi=no`
const baseURLVancouver = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=45.6387281,-122.6614861 Vancouver&aqi=no`
const baseURLSydney = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=-33.865143,151.209900 Sydney&aqi=no`
const baseURLNewYork = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=40.730610,-73.935242 New York&aqi=no`
const baseURLTokyo = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=35.6894,139.692 Tokyo&aqi=no`

export default function App() {
  const [paris, setParis] = React.useState(null)
  const [london, setLondon] = React.useState(null)
  const [vancouver, setVancouver] = React.useState(null)
  const [sydney, setSydney] = React.useState(null)
  const [newYork, setNewYork] = React.useState(null)
  const [tokyo, setTokyo] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseURLParis).then(response => {
      setParis(response.data)
    })
  }, [])
  console.log('******', paris)
  React.useEffect(() => {
    axios.get(baseURLLondon).then(response => {
      setLondon(response.data)
    })
  }, [])
  console.log('******', london)
  React.useEffect(() => {
    axios.get(baseURLVancouver).then(response => {
      setVancouver(response.data)
    })
  }, [])
  console.log('******', vancouver)
  React.useEffect(() => {
    axios.get(baseURLSydney).then(response => {
      setSydney(response.data)
    })
  }, [])
  console.log('******', sydney)
  React.useEffect(() => {
    axios.get(baseURLNewYork).then(response => {
      setNewYork(response.data)
    })
  }, [])
  console.log('******', newYork)
  React.useEffect(() => {
    axios.get(baseURLTokyo).then(response => {
      setTokyo(response.data)
    })
  }, [])
  console.log('******', tokyo)

  if (!paris || !london || !vancouver || !sydney) return null

  return (
    <div class="flex flex-wrap justify-around mt-20">
      <CardCity
        code={paris.current.condition.code}
        hour={paris.location.localtime}
        temp={paris.current.temp_c}
        name={paris.location.name}
      />
      <CardCity
        code={london.current.condition.code}
        hour={london.location.localtime}
        temp={london.current.temp_c}
        name={london.location.name}
      />
      <CardCity
        code={vancouver.current.condition.code}
        hour={vancouver.location.localtime}
        temp={vancouver.current.temp_c}
        name={vancouver.location.name}
      />
      <CardCity
        code={sydney.current.condition.code}
        hour={sydney.location.localtime}
        temp={sydney.current.temp_c}
        name={sydney.location.name}
      />
      <CardCity
        code={newYork.current.condition.code}
        hour={newYork.location.localtime}
        temp={newYork.current.temp_c}
        name={newYork.location.name}
      />
      <CardCity
        code={tokyo.current.condition.code}
        hour={tokyo.location.localtime}
        temp={tokyo.current.temp_c}
        name={tokyo.location.name}
      />
    </div>
  )
}
