import axios from './../api/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import codeWeather from '../codeWeather'

function Card({ name, fetchUrl, toggle }) {
  const [city, setCity] = React.useState()

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      console.log(request)
      setCity(request.data)
      return request
    }
    fetchData()
  }, [fetchUrl])
  console.log('*******', city)

  // get month
  const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre'
  ]

  if (!city) return null

  // get index for code weather
  let index = codeWeather.findIndex(item => item.code === city.current.condition.code)

  // isolate hour number
  let currentHour = city.location.localtime.split('')[11] + city.location.localtime.split('')[12]
  const regex = currentHour.replace(':', '')

  // get time and date
  let date = city.location.localtime.slice(0, 11)
  let time = city.location.localtime.slice(11)

  let month = months[parseInt(date.slice(5, 7)) - 1]

  // get year

  let year = date.slice(0, 4)

  // get day

  let day = date.slice(8, 10)

  return (
    <>
      {regex < 21 && regex > 6 ? (
        <div>
          <div class="flex relative justify-between w-full min-h-min rounded-lg text-white-100 bg-primary-100 pt-5 pb-5">
            <div class="ml-8 flex flex-col">
              <div>
                <div class="flex uppercase whitespace-nowrap text-1xl xs:text-1xl sm:text-1xl md:text-1xl lg:text-2xl">
                  {city.location.name}
                </div>
              </div>
              <div class="flex items-center">
                <FontAwesomeIcon
                  class="text-white-100 w-11"
                  icon={
                    regex < 21 && regex > 6 ? codeWeather[index].icon : codeWeather[index].iconNight
                  }
                />
                &nbsp;
                <div class="flex justify-center text-4xl">
                  {!toggle ? (
                    <div>
                      <span>{city.current.temp_c}</span>
                      <span>°C</span>
                    </div>
                  ) : (
                    <div>
                      <span>{(city.current.temp_c * 1.8 + 32).toFixed()}</span>
                      <span>°F</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="mr-8">
              <div class="flex flex-col justify-center">
                <div class="flex justify-end text-2xl">{time}</div>
                <div class="flex justify-between text-2xl">
                  {day}&nbsp;{month}&nbsp;{year}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="flex justify-between w-full min-h-min rounded-lg text-white-100 bg-secondary-100 pt-5 pb-5">
          <div class="ml-8 flex flex-col">
            <div>
              <div class="flex uppercase whitespace-nowrap text-1xl xs:text-1xl sm:text-1xl md:text-1xl lg:text-2xl">
                {city.location.name}
              </div>
            </div>
            <div class="flex items-center">
              <FontAwesomeIcon
                class="text-white-100 w-11"
                icon={
                  regex < 21 && regex > 6 ? codeWeather[index].icon : codeWeather[index].iconNight
                }
              />
              &nbsp;
              <div class="flex justify-center text-4xl">
                {!toggle ? (
                  <div>
                    <span>{city.current.temp_c}</span>
                    <span>°C</span>
                  </div>
                ) : (
                  <div>
                    <span>{(city.current.temp_c * 1.8 + 32).toFixed()}</span>
                    <span>°F</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="mr-8 ">
            <div class="flex flex-col justify-center">
              <div class="flex justify-end text-2xl">{time}</div>
              <div class="flex justify-between text-2xl">
                {day}&nbsp;{month}&nbsp;{year}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card