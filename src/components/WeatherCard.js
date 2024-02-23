import React from 'react'

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return null
  }

  const { location, current } = weatherData

  // Format local time
  const localTime = new Date(location.localtime).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  // Weather condition text provided by the API
  const weatherConditionText = current.condition.text

  // Weather icon URL provided by the API
  const weatherIconUrl = current.condition.icon

  return (
    <span className="mt-10 flex flex-col space-y-8 justify-center items-center">
      <img
        className="w-24"
        src={weatherIconUrl}
        alt="Weather Icon"
        loading="lazy"
      />
      <div className="flex justify-center items-center flex-col space-y-1">
        <p className="text-sm">{weatherConditionText}</p>

        <h2 className="text-base">
          {location.name}, {location.country}
        </h2>
        <p className="text-sm">Local Time: {localTime}</p>
        <h1 className="text-8xl">{Math.round(current.temp_c)}°</h1>
      </div>
    </span>
  )
}

export default WeatherCard
