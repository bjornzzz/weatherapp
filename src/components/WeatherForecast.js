import React, { useState, useEffect } from 'react'
import { getWeatherForecast } from '../api'

function WeatherForecast({ city }) {
  const [forecastData, setForecastData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchForecast = async () => {
      if (!city) {
        return // Do nothing if the city name is empty or null
      }

      try {
        const data = await getWeatherForecast(city)
        setForecastData(data)
        setError(null) // Clear any previous error if successful
      } catch (error) {
        console.error('Error fetching weather forecast', error)
        setError(error)
      }
    }

    fetchForecast()
  }, [city])

  // If there's an error or the city name is empty or null, return null
  if (error || !city) {
    return null
  }

  // Function to calculate the date for the day after tomorrow and the day after that
  const getNextTwoDays = () => {
    const today = new Date()
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const nextDay = new Date(today)
    nextDay.setDate(nextDay.getDate() + 1)
    const thirdDay = new Date(nextDay)
    thirdDay.setDate(thirdDay.getDate() + 1)
    return [days[nextDay.getDay()], days[thirdDay.getDay()]]
  }

  const [nextDay, thirdDay] = getNextTwoDays()

  return (
    <div className="mt-20 space-x-5 flex justify-center items-center">
      {forecastData.slice(0, 3).map((forecast, index) => (
        <div
          key={index}
          className="w-28 h-36 rounded-lg flex flex-col justify-center items-center p-2"
        >
          <h1 className="text-lg font-bold">
            {index === 0 ? 'Tomorrow' : index === 1 ? nextDay : thirdDay}
          </h1>
          <img
            src={forecast.day.condition.icon}
            alt="Weather Icon"
            className="w-12 h-12"
          />
          <p className="mt-2 text-lg">{Math.round(forecast.day.avgtemp_c)}°</p>
        </div>
      ))}
    </div>
  )
}

export default WeatherForecast
