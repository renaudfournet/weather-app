import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import codeWeather from './codeWeather'

export default function CardCity(props) {
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
    'January',
    'February',
    'March',
    'April',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  let month = months[parseInt(date.slice(5, 7)) - 2]

  // get year

  let year = date.slice(0, 4)

  // get day

  let day = date.slice(8, 10)

  return (
    <>
      <div
        class={`flex items-center justify-between w-1/3 h-32 rounded-lg text-white-100 bg-${
          regex < 21 && regex > 6 ? 'blue-600' : 'black-200'
        } mx-10 mt-10`}
      >
        <div class="mx-8 flex flex-col">
          <FontAwesomeIcon
            class="text-white-100 w-10"
            icon={regex < 21 && regex > 6 ? codeWeather[index].icon : codeWeather[index].iconNight}
          />
          <div class="flex justify-center font-bold text-2xl">{props.temp}</div>
        </div>
        <div class="mx-8 ">
          <div class="flex flex-col justify-center font-bold">
            <div class="flex justify-end">{time}</div>
            <div class="flex justify-between">
              <div>
                {day}&nbsp;{month}&nbsp;{year}
              </div>
            </div>
          </div>
          <div class=" flex justify-end font-bold">{props.name}</div>
        </div>
      </div>
    </>
  )
}
