import 'dotenv/config'

const API_Key = process.env.REACT_APP_API_Key

const requests = {
  Paris: `current.json?key=${API_Key}&q=48.8567,2.3508 Paris&aqi=no`,
  London: `current.json?key=${API_Key}&q=51.5073509,-0.1277583 London&aqi=no`,
  Sydney: `current.json?key=${API_Key}&q=-33.865143,151.209900 Sydney&aqi=no`,
  Vancouver: `current.json?key=${API_Key}&q=45.6387281,-122.6614861 Vancouver&aqi=no`,
  NewYork: `current.json?key=${API_Key}&q=40.730610,-73.935242 New York&aqi=no`,
  Tokyo: `current.json?key=${API_Key}&q=35.6894,139.692 Tokyo&aqi=no`
}

export default requests
