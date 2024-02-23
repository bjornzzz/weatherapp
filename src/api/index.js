import Axios from 'axios'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const getCurrentWeather = async (city) => {
  try {
    const response = await Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
    )
    return response.data
  } catch (error) {
    console.error('Error fetching current weather', error)
    throw error
  }
}

const getWeatherForecast = async (city, days = 3) => {
  try {
    const response = await Axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}`,
    )
    return response.data.forecast.forecastday
  } catch (error) {
    console.error('Error fetching weather forecast', error)
    throw error
  }
}

export { getCurrentWeather, getWeatherForecast }
