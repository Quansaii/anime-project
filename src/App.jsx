import { useState } from 'react'
import { Header } from './Header'
import { SearchContainer } from './Search'
import { PopularSection } from './PopularSection'
import { RecentSection } from './RecentSection'
import { RandomSection } from './RandomSection'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <SearchContainer/>
      <PopularSection/>
      <RecentSection/>
      <RandomSection/>
    </>
  )
}

export default App
