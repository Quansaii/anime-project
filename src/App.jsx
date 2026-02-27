import { useState } from 'react'
import { Header } from './Header'
import { SearchContainer } from './Search'
import { PopularSection } from './PopularSection'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <SearchContainer/>
      <PopularSection/>
    </>
  )
}

export default App
