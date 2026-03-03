import { useState } from 'react'
import { Header } from './Header'
import { SearchContainer } from './Search'
import { PopularSection } from './PopularSection'
import { RecentSection } from './RecentSection'
import { RandomSection } from './RandomSection'
import { Route, Routes } from 'react-router'
import { DetailsPage } from './detailsPage'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route index element={
        <>
          <Header/>
          <SearchContainer/>
          <PopularSection/>
          <RecentSection/>
          <RandomSection/>
        </>}/>
      <Route path="/details" element={
        <>
          <DetailsPage/>
        </>}/>
    </Routes>
    </>
  )
}

export default App
