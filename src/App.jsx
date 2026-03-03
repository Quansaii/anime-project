import { useState } from 'react'
import { Header } from './Header'
import { SearchContainer } from './Search'
import { PopularSection } from './PopularSection'
import { RecentSection } from './RecentSection'
import { RandomSection } from './RandomSection'
import { Route, Routes } from 'react-router'
import { DetailesPage } from './DetailesPage'
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
      <Route path="/detailes" element={
        <>
          <DetailesPage/>
        </>}/>
    </Routes>
    </>
  )
}

export default App
