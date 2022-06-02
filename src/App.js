import React from 'react'
import CardCity from './components/CardCity'
import './App.css'
import * as API from './api'

export default function App(
  baseURLParis,
  baseURLLondon,
  baseURLNewYork,
  baseURLSydney,
  baseURLTokyo,
  baseURLVancouver
  // baseURLIP
) {
  // const location = API.GetIPLocation(baseURLIP)
  const paris = API.GetParis(baseURLParis)
  const london = API.GetLondon(baseURLLondon)
  const vancouver = API.GetVancouver(baseURLVancouver)
  const sydney = API.GetSydney(baseURLSydney)
  const newyork = API.GetNewYork(baseURLNewYork)
  const tokyo = API.GetTokyo(baseURLTokyo)

  if (!paris || !london || !vancouver || !sydney || !newyork || !tokyo) return null
  // console.log('*****', location)
  return (
    <div class="flex flex-wrap justify-around mt-20">
      {/* <CardCity name={location.city} /> */}
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
        code={newyork.current.condition.code}
        hour={newyork.location.localtime}
        temp={newyork.current.temp_c}
        name={newyork.location.name}
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
