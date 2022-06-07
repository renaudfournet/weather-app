import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faCloudSunRain,
  faSmog,
  faSun,
  faSnowflake,
  faMoon,
  faCloudMoon
} from '@fortawesome/free-solid-svg-icons'

let codeWeather = [
  {
    code: 1000,
    day: 'Sunny',
    night: 'Clear',
    iconNight: faMoon,
    icon: faSun
  },
  {
    code: 1003,
    day: 'Partly cloudy',
    night: 'Partly cloudy',
    iconNight: faCloudMoon,
    icon: faCloudSun
  },
  {
    code: 1006,
    day: 'Cloudy',
    night: 'Cloudy',
    iconNight: faCloud,
    icon: faCloud
  },
  {
    code: 1009,
    day: 'Overcast',
    night: 'Overcast',
    iconNight: faCloud,
    icon: faCloud
  },
  {
    code: 1030,
    day: 'Mist',
    night: 'Mist',
    iconNight: faSmog,
    icon: faSmog
  },
  {
    code: 1063,
    day: 'Patchy rain possible',
    night: 'Patchy rain possible',
    icon: faCloudSunRain
  },
  {
    code: 1066,
    day: 'Patchy snow possible',
    night: 'Patchy snow possible',
    icon: faSnowflake
  },
  {
    code: 1069,
    day: 'Patchy sleet possible',
    night: 'Patchy sleet possible',
    icon: faSnowflake
  },
  {
    code: 1072,
    day: 'Patchy freezing drizzle possible',
    night: 'Patchy freezing drizzle possible',
    icon: faSnowflake
  },
  {
    code: 1087,
    day: 'Thundery outbreaks possible',
    night: 'Thundery outbreaks possible',
    icon: faCloudBolt
  },
  {
    code: 1114,
    day: 'Blowing snow',
    night: 'Blowing snow',
    icon: faSnowflake
  },
  {
    code: 1117,
    day: 'Blizzard',
    night: 'Blizzard',
    icon: faSnowflake
  },
  {
    code: 1135,
    day: 'Fog',
    night: 'Fog',
    icon: faSmog
  },
  {
    code: 1147,
    day: 'Freezing fog',
    night: 'Freezing fog',
    icon: faSmog
  },
  {
    code: 1150,
    day: 'Patchy light drizzle',
    night: 'Patchy light drizzle',
    icon: faSmog
  },
  {
    code: 1153,
    day: 'Light drizzle',
    night: 'Light drizzle',
    icon: faSmog
  },
  {
    code: 1168,
    day: 'Freezing drizzle',
    night: 'Freezing drizzle',
    icon: faSmog
  },
  {
    code: 1171,
    day: 'Heavy freezing drizzle',
    night: 'Heavy freezing drizzle',
    icon: faSmog
  },
  {
    code: 1180,
    day: 'Patchy light rain',
    night: 'Patchy light rain',
    icon: faCloudSunRain
  },
  {
    code: 1183,
    day: 'Light rain',
    night: 'Light rain',
    iconNight: faCloudMoon,
    icon: faCloudSunRain
  },
  {
    code: 1186,
    day: 'Moderate rain at times',
    night: 'Moderate rain at times',
    icon: faCloudRain
  },
  {
    code: 1189,
    day: 'Moderate rain',
    night: 'Moderate rain',
    icon: faCloudRain
  },
  {
    code: 1192,
    day: 'Heavy rain at times',
    night: 'Heavy rain at times',
    icon: faCloudShowersHeavy
  },
  {
    code: 1195,
    day: 'Heavy rain',
    night: 'Heavy rain',
    icon: faCloudShowersHeavy
  },
  {
    code: 1198,
    day: 'Light freezing rain',
    night: 'Light freezing rain',
    icon: faCloudRain
  },
  {
    code: 1201,
    day: 'Moderate or heavy freezing rain',
    night: 'Moderate or heavy freezing rain',
    icon: faCloudShowersHeavy
  },
  {
    code: 1204,
    day: 'Light sleet',
    night: 'Light sleet',
    icon: faCloudRain
  },
  {
    code: 1207,
    day: 'Moderate or heavy sleet',
    night: 'Moderate or heavy sleet',
    icon: faCloudRain
  },
  {
    code: 1210,
    day: 'Patchy light snow',
    night: 'Patchy light snow',
    icon: faSnowflake
  },
  {
    code: 1213,
    day: 'Light snow',
    night: 'Light snow',
    icon: faSnowflake
  },
  {
    code: 1216,
    day: 'Patchy moderate snow',
    night: 'Patchy moderate snow',
    icon: faSnowflake
  },
  {
    code: 1219,
    day: 'Moderate snow',
    night: 'Moderate snow',
    icon: faSnowflake
  },
  {
    code: 1222,
    day: 'Patchy heavy snow',
    night: 'Patchy heavy snow',
    icon: faSnowflake
  },
  {
    code: 1225,
    day: 'Heavy snow',
    night: 'Heavy snow',
    icon: faSnowflake
  },
  {
    code: 1237,
    day: 'Ice pellets',
    night: 'Ice pellets',
    icon: faSnowflake
  },
  {
    code: 1240,
    day: 'Light rain shower',
    night: 'Light rain shower',
    icon: faCloudRain
  },
  {
    code: 1243,
    day: 'Moderate or heavy rain shower',
    night: 'Moderate or heavy rain shower',
    icon: faCloudShowersHeavy
  },
  {
    code: 1246,
    day: 'Torrential rain shower',
    night: 'Torrential rain shower',
    icon: faCloudShowersHeavy
  },
  {
    code: 1249,
    day: 'Light sleet showers',
    night: 'Light sleet showers',
    icon: faCloudRain
  },
  {
    code: 1252,
    day: 'Moderate or heavy sleet showers',
    night: 'Moderate or heavy sleet showers',
    icon: faCloudRain
  },
  {
    code: 1255,
    day: 'Light snow showers',
    night: 'Light snow showers',
    icon: faSnowflake
  },
  {
    code: 1258,
    day: 'Moderate or heavy snow showers',
    night: 'Moderate or heavy snow showers',
    icon: faSnowflake
  },
  {
    code: 1261,
    day: 'Light showers of ice pellets',
    night: 'Light showers of ice pellets',
    icon: faSnowflake
  },
  {
    code: 1264,
    day: 'Moderate or heavy showers of ice pellets',
    night: 'Moderate or heavy showers of ice pellets',
    icon: faSnowflake
  },
  {
    code: 1273,
    day: 'Patchy light rain with thunder',
    night: 'Patchy light rain with thunder',
    icon: faCloudBolt
  },
  {
    code: 1276,
    day: 'Moderate or heavy rain with thunder',
    night: 'Moderate or heavy rain with thunder',
    iconNight: faCloudMoon,
    icon: faCloudBolt
  },
  {
    code: 1279,
    day: 'Patchy light snow with thunder',
    night: 'Patchy light snow with thunder',
    icon: faCloudBolt
  },
  {
    code: 1282,
    day: 'Moderate or heavy snow with thunder',
    night: 'Moderate or heavy snow with thunder',
    icon: faCloudBolt
  }
]

export default codeWeather
