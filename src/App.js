import React, { useState } from 'react'
import CardCity from './components/CardCity'
import './App.css'
import * as API from './api'
// import axios from 'axios'
const API_Key = process.env.REACT_APP_API_Key

export default function App(
  baseURLParis,
  baseURLLondon,
  baseURLNewYork,
  baseURLSydney,
  baseURLTokyo,
  baseURLVancouver
) {
  const [toggle, setToggle] = useState(false)
  // const ip = API.GetIP(IP)
  // console.log('IP', ip)
  // const location = API.GetLocation(baseURLLocation)
  // console.log('LOCATION', location)

  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])
  const paris = API.GetParis(baseURLParis)
  // console.log('PARIS', paris)
  const london = API.GetLondon(baseURLLondon)
  const vancouver = API.GetVancouver(baseURLVancouver)
  const sydney = API.GetSydney(baseURLSydney)
  const newyork = API.GetNewYork(baseURLNewYork)
  const tokyo = API.GetTokyo(baseURLTokyo)

  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })
      await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${lat},${long}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result)
        })
    }
    console.log('Latitude is:', lat)
    console.log('Longitude is:', long)
    console.log('DATA:', data)
    fetchData()
  }, [lat, long, data])

  if (!paris || !london || !vancouver || !sydney || !newyork || !tokyo || !data) return null
  // console.log('*****', paris)

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true)
  }
  return (
    <>
      <div class="flex justify-end mt-2 mx-2">
        <div class="flex">
          <div class="label-text text-2xl">°C&nbsp;</div>
          <label class="label">
            <div onChange={toggler} class="toggle">
              <input class="toggle-state" type="checkbox" name="check" value="check" />

              <div class="toggle-inner">
                <div class="indicator"></div>
              </div>
              <div class="active-bg"></div>
            </div>
          </label>
          <div class="label-text text-2xl">&nbsp;°F</div>
        </div>
      </div>
      <div class="grid h-max grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-5 xs:mx-2 md:mx-5 lg:mx-20 xl:mx-52 gap-4 lg:mt-10">
        <CardCity
          toggle={toggle}
          hour={data.location.localtime}
          temp={data.current.temp_c}
          code={data.current.condition.code}
          name={data.location.name}
        />
        <CardCity
          toggle={toggle}
          code={paris.current.condition.code}
          hour={paris.location.localtime}
          temp={paris.current.temp_c}
          name={paris.location.name}
        />
        <CardCity
          toggle={toggle}
          code={london.current.condition.code}
          hour={london.location.localtime}
          temp={london.current.temp_c}
          name={london.location.name}
        />
        <CardCity
          toggle={toggle}
          code={vancouver.current.condition.code}
          hour={vancouver.location.localtime}
          temp={vancouver.current.temp_c}
          name={vancouver.location.name}
        />
        <CardCity
          toggle={toggle}
          code={sydney.current.condition.code}
          hour={sydney.location.localtime}
          temp={sydney.current.temp_c}
          name={sydney.location.name}
        />
        <CardCity
          toggle={toggle}
          code={newyork.current.condition.code}
          hour={newyork.location.localtime}
          temp={newyork.current.temp_c}
          name={newyork.location.name}
        />
        <CardCity
          toggle={toggle}
          code={tokyo.current.condition.code}
          hour={tokyo.location.localtime}
          temp={tokyo.current.temp_c}
          name={tokyo.location.name}
        />
      </div>
    </>
  )
}
