import React from 'react'
import SearchBar from './SearchBar'

function Header({ onSearch }) {
  return (
    <header className="flex justify-center items-center p-6">
      <SearchBar onSearch={onSearch} />
    </header>
  )
}

export default Header
