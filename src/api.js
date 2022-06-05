import React from 'react'
import axios from 'axios'
import 'dotenv/config'

const API_Key = process.env.REACT_APP_API_Key

// export const GetIP = () => {
//   const IP = 'https://geolocation-db.com/json/'
//   const [ip, setIP] = React.useState(null)
//   // const baseURLIP = `http://api.weatherapi.com/v1/ip.json?key=${API_Key}&q=${ip.IPv4}`
//   // const [location, setLocation] = React.useState(null)
//   React.useEffect(() => {
//     axios.get(IP).then(response => {
//       setIP(response.data)
//     })
//   }, [])
//   return ip
// }

export const GetParis = () => {
  const baseURLParis = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=48.8567,2.3508 Paris&aqi=no`
  const [paris, setParis] = React.useState(null)
  React.useEffect(() => {
    axios.get(baseURLParis).then(response => {
      setParis(response.data)
    })
  }, [baseURLParis])
  return paris
}

export const GetLondon = () => {
  const baseURLLondon = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=51.5073509,-0.1277583 London&aqi=no`
  const [london, setLondon] = React.useState(null)
  React.useEffect(() => {
    axios.get(baseURLLondon).then(response => {
      setLondon(response.data)
    })
  }, [baseURLLondon])
  return london
}

export const GetVancouver = () => {
  const baseURLVancouver = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=45.6387281,-122.6614861 Vancouver&aqi=no`
  const [vancouver, setVancouver] = React.useState(null)
  React.useEffect(() => {
    axios.get(baseURLVancouver).then(response => {
      setVancouver(response.data)
    })
  }, [baseURLVancouver])
  return vancouver
}

export const GetSydney = () => {
  const baseURLSydney = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=-33.865143,151.209900 Sydney&aqi=no`
  const [sydney, setSydney] = React.useState(null)
  React.useEffect(() => {
    axios.get(baseURLSydney).then(response => {
      setSydney(response.data)
    })
  }, [baseURLSydney])
  return sydney
}

export const GetNewYork = () => {
  const baseURLNewYork = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=40.730610,-73.935242 New York&aqi=no`
  const [newYork, setnewYork] = React.useState(null)
  React.useEffect(() => {
    axios.get(baseURLNewYork).then(response => {
      setnewYork(response.data)
    })
  }, [baseURLNewYork])
  return newYork
}

export const GetTokyo = () => {
  const baseURLTokyo = `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=35.6894,139.692 Tokyo&aqi=no`
  const [tokyo, setTokyo] = React.useState(null)
  React.useEffect(() => {
    axios.get(baseURLTokyo).then(response => {
      setTokyo(response.data)
    })
  }, [baseURLTokyo])
  return tokyo
}
