import React from 'react'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import DealSection from './components/DealSection'
import TopCategories from './components/TopCategories'
import ElectronicsBrand from './components/ElectronicsBrand'
import Essential from './components/Essential'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
  return (
    <>
    <TopBar/>
    <SearchBar/>
    <NavBar/>
    <Hero/>
    <DealSection/>
    <TopCategories/>
    <ElectronicsBrand/>
    <Essential/>
    <Footer/>
    </>
  )
}

export default App