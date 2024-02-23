import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { getCurrentWeather } from '../api'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = async () => {
    try {
      const weatherData = await getCurrentWeather(input)
      onSearch(weatherData, input)
    } catch (error) {
      console.error('Error fetching current Weather', error)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="relative">
      <input
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search"
        className="border-b-2 border-white rounded-none px-1 py-2 focus:outline-none focus:ring-0 w-64 bg-transparent text-white"
      />
      <div className="absolute inset-y-0 right-0 pr-1 flex items-center pointer-events-none">
        <CiSearch className="h-5 w-5 text-white" onClick={handleSearch} />{' '}
      </div>
    </div>
  )
}

export default SearchBar
