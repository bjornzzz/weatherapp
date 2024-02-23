import React, { useState } from 'react'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'
import WeatherForecast from './components/WeatherForecast'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [cityFromSearchBar, setCityFromSearchBar] = useState('')

  const handleSearch = (data, city) => {
    setWeatherData(data)
    setCityFromSearchBar(city)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-3xl w-[425px] min-h-[700px] bg-weatherColor rounded-2xl">
        <Header onSearch={handleSearch} />
        <WeatherCard weatherData={weatherData} />
        <WeatherForecast city={cityFromSearchBar} />
      </div>
    </div>
  )
}

export default App
