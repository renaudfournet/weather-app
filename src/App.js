import React from 'react'
import './App.css'
// import Main from './components/Main'
import Card from './components/Card'
import requests from './api/requests'
import CardLocation from './components/CardLocation'
import { logo } from './images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong, faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

const API_Key = process.env.REACT_APP_API_Key

export default function App() {
  const [toggle, setToggle] = React.useState(false)
  const [show, setShow] = React.useState(false)

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

  const showSettings = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <>
      <nav class="bg-whitesmoke-100 border-gray-200 rounded dark:bg-gray-800">
        <div class="flex justify-between items-center">
          <div class="flex items-center px-2">
            <img src={logo} class="w-32 h-32 " alt="Weather Logo" />
          </div>

          <div class=" w-full md:block md:w-auto px-4">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <div class="flex justify-end text-black-100">
                  <div class="relative inline-block text-left">
                    <div>
                      <button
                        onClick={showSettings}
                        type="button"
                        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
                        id="menu-button"
                      >
                        Settings&nbsp;
                        <div>
                          {show ? (
                            <FontAwesomeIcon icon={faArrowUpLong} />
                          ) : (
                            <FontAwesomeIcon icon={faArrowDownLong} />
                          )}
                        </div>
                      </button>
                    </div>
                    {show ? (
                      <div
                        class="z-50 origin-top-right bg-whitesmoke-100 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                      >
                        <div class="py-1" role="none">
                          <div
                            class="text-gray-700 px-2 py-2 flex flex-col"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-0"
                          >
                            <div class="flex">
                              <div class="label-text text-2xl">°C&nbsp;</div>
                              <label class="label">
                                <div onChange={toggler} class="toggle">
                                  <input
                                    class="toggle-state"
                                    type="checkbox"
                                    name="check"
                                    value="check"
                                  />

                                  <div class="toggle-inner">
                                    <div class="indicator"></div>
                                  </div>
                                  <div class="active-bg"></div>
                                </div>
                              </label>
                              <div class="label-text text-2xl">&nbsp;°F</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
