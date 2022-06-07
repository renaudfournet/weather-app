import React from 'react'
import CardCity from './components/CardCity'
import Location from './components/Location'
import './App.css'
import * as API from './api'
// import axios from 'axios'
import 'dotenv/config'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'

const API_Key = process.env.REACT_APP_API_Key

export default function Main(
  baseURLParis,
  baseURLLondon,
  baseURLNewYork,
  baseURLSydney,
  baseURLTokyo,
  baseURLVancouver
) {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `
  let [loading, setLoading] = React.useState(true)
  let [color, setColor] = React.useState('')
  const [toggle, setToggle] = React.useState(false)
  // const ip = API.GetIP(IP)
  // console.log('IP', ip)
  // const location = API.GetLocation(baseURLLocation)
  // console.log('LOCATION', location)
  // `https://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${lat},${long}`
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

  const paris = API.GetParis(baseURLParis)
  console.log('PARIS', paris)
  const london = API.GetLondon(baseURLLondon)
  const vancouver = API.GetVancouver(baseURLVancouver)
  const sydney = API.GetSydney(baseURLSydney)
  const newyork = API.GetNewYork(baseURLNewYork)
  const tokyo = API.GetTokyo(baseURLTokyo)

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true)
  }
  // console.log('WEATHERDATA', data)
  if (data.current !== 'undefined')
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
            <Location
              toggle={toggle}
              code={data.current.condition.code}
              hour={data.location.localtime}
              temp={data.current.temp_c}
              name={data.location.name}
            />
          ) : (
            <div className="sweet-loading">
              <button onClick={() => setLoading(!loading)}></button>
              <input value={color} onChange={input => setColor(input.target.value)} />

              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          )}
          {typeof data.current != 'undefined' ? (
            <CardCity
              toggle={toggle}
              code={paris.current.condition.code}
              hour={paris.location.localtime}
              temp={paris.current.temp_c}
              name={paris.location.name}
            />
          ) : (
            <div className="sweet-loading">
              <button onClick={() => setLoading(!loading)}></button>
              <input value={color} onChange={input => setColor(input.target.value)} />

              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          )}
          {typeof data.current != 'undefined' ? (
            <CardCity
              toggle={toggle}
              code={london.current.condition.code}
              hour={london.location.localtime}
              temp={london.current.temp_c}
              name={london.location.name}
            />
          ) : (
            <div className="sweet-loading">
              <button onClick={() => setLoading(!loading)}></button>
              <input value={color} onChange={input => setColor(input.target.value)} />

              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          )}
          {typeof data.current != 'undefined' ? (
            <CardCity
              toggle={toggle}
              code={vancouver.current.condition.code}
              hour={vancouver.location.localtime}
              temp={vancouver.current.temp_c}
              name={vancouver.location.name}
            />
          ) : (
            <div className="sweet-loading">
              <button onClick={() => setLoading(!loading)}></button>
              <input value={color} onChange={input => setColor(input.target.value)} />

              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          )}
          {typeof data.current != 'undefined' ? (
            <CardCity
              toggle={toggle}
              code={sydney.current.condition.code}
              hour={sydney.location.localtime}
              temp={sydney.current.temp_c}
              name={sydney.location.name}
            />
          ) : (
            <div className="sweet-loading">
              <button onClick={() => setLoading(!loading)}></button>
              <input value={color} onChange={input => setColor(input.target.value)} />

              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          )}
          {typeof data.current != 'undefined' ? (
            <CardCity
              toggle={toggle}
              code={tokyo.current.condition.code}
              hour={tokyo.location.localtime}
              temp={tokyo.current.temp_c}
              name={tokyo.location.name}
            />
          ) : (
            <div className="sweet-loading">
              <button onClick={() => setLoading(!loading)}></button>
              <input value={color} onChange={input => setColor(input.target.value)} />

              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          )}
          {typeof data.current != 'undefined' ? (
            <CardCity
              toggle={toggle}
              code={newyork.current.condition.code}
              hour={newyork.location.localtime}
              temp={newyork.current.temp_c}
              name={newyork.location.name}
            />
          ) : (
            <div className="sweet-loading">
              <button onClick={() => setLoading(!loading)}></button>
              <input value={color} onChange={input => setColor(input.target.value)} />

              <ClipLoader color={color} loading={loading} css={override} size={150} />
            </div>
          )}
        </div>
      </>
    )
}
