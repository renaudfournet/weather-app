import { faArrowRightLong, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import codeWeather from './../codeWeather'

export default function CardLocation(props) {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(!showResults)
  // console.log('props', props)
  // get index for code weather
  let index = codeWeather.findIndex(item => item.code === props.code)

  // isolate hour number
  let currentHour = props.hour.split('')[11] + props.hour.split('')[12]
  const regex = currentHour.replace(':', '')

  // get time and date
  let date = props.hour.slice(0, 11)
  let time = props.hour.slice(11)

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

  let month = months[parseInt(date.slice(5, 7)) - 1]

  // get year

  let year = date.slice(0, 4)

  // get day

  let day = date.slice(8, 10)

  return (
    <>
      {regex < 21 && regex > 6 ? (
        <div>
          <div class="flex relative justify-between w-full h-fit rounded-lg text-white-100 bg-primary-100 pt-5 pb-5">
            <div class="ml-8 flex flex-col">
              <div>
                <div class="flex uppercase whitespace-nowrap text-1xl xs:text-1xl sm:text-1xl md:text-1xl lg:text-2xl">
                  <div>
                    <FontAwesomeIcon className="text-2xl" icon={faLocationDot} />
                  </div>
                  &nbsp;<span>{props.name}</span>
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
                  {!props.toggle ? (
                    <div>
                      <span>{props.temp}</span>
                      <span>°C</span>
                    </div>
                  ) : (
                    <div>
                      <span>{(props.temp * 1.8 + 32).toFixed()}</span>
                      <span>°F</span>
                    </div>
                  )}
                </div>
              </div>

              <div onClick={onClick}>
                <span>Détails</span> <FontAwesomeIcon icon={faArrowRightLong} />
                {showResults ? (
                  <div>
                    <ul>
                      <li>Humidity : {props.hum} %</li>
                      <li>Wind : {props.wind} km/h</li>
                      <li>Précipitations : {props.prec} mm</li>
                    </ul>
                  </div>
                ) : null}
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
        <div class="flex justify-between w-full h-fit rounded-lg text-white-100 bg-secondary-100 pt-5 pb-5">
          <div class="ml-8 flex flex-col">
            <div>
              <div class="flex uppercase whitespace-nowrap text-1xl xs:text-1xl sm:text-1xl md:text-1xl lg:text-2xl">
                <div>
                  <FontAwesomeIcon className="text-2xl" icon={faLocationDot} />
                </div>
                &nbsp;<span>{props.name}</span>
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
              <div class="flex items-center  justify-center text-4xl">
                {!props.toggle ? (
                  <div>
                    <span>{props.temp}</span>
                    <span>°C</span>
                  </div>
                ) : (
                  <div>
                    <span>{(props.temp * 1.8 + 32).toFixed()}</span>
                    <span>°F</span>
                  </div>
                )}
              </div>
            </div>
            <div onClick={onClick}>
              <span>Détails</span> <FontAwesomeIcon icon={faArrowRightLong} />
              {showResults ? (
                <div>
                  <ul>
                    <li>Humidity : {props.hum} %</li>
                    <li>Wind : {props.wind} km/h</li>
                    <li>Précipitations : {props.prec} mm</li>
                  </ul>
                </div>
              ) : null}
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
