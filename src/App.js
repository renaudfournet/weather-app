import React from 'react'
import './App.css'
// import Main from './components/Main'
import Card from './components/Card'
import requests from './api/requests'
import CardLocation from './components/CardLocation'

const API_Key = process.env.REACT_APP_API_Key

export default function App() {
  const [toggle, setToggle] = React.useState(false)

  const [lat, setLat] = React.useState([])
  const [long, setLong] = React.useState([])
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${lat},${long} `)
        .then(res => res.json())
        .then(result => {
          setData(result)
          // console.log(result)
        })
    }
    fetchData()
  }, [lat, long])

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
      <div class="grid h-max grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-5 xs:mx-2 md:mx-5 lg:mx-5 xl:mx-10 gap-4 lg:mt-10">
        {typeof data.current != 'undefined' ? (
          <CardLocation
            toggle={toggle}
            wind={data.current.wind_kph}
            prec={data.current.precip_mm}
            hum={data.current.humidity}
            code={data.current.condition.code}
            hour={data.location.localtime}
            temp={data.current.temp_c}
            name={data.location.name}
          />
        ) : (
          <div>Loading ...</div>
        )}
        <Card toggle={toggle} name="Paris" fetchUrl={requests.Paris} />
        <Card toggle={toggle} name="London" fetchUrl={requests.London} />
        <Card toggle={toggle} name="Vancouver" fetchUrl={requests.Vancouver} />
        <Card toggle={toggle} name="Sydney" fetchUrl={requests.Sydney} />
        <Card toggle={toggle} name="NewYork" fetchUrl={requests.NewYork} />
        <Card toggle={toggle} name="Tokyo" fetchUrl={requests.Tokyo} />
      </div>
    </>
  )
}
