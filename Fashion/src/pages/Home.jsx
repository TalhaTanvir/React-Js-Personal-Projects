import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Sponsor from '../components/Sponsor'
import NewArrivals from '../components/NewArrivals'
import Favourite from '../components/Favourite'
import Download from '../components/Download'
import Email from '../components/Email'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Sponsor/>
    <NewArrivals/>
    <Favourite/>
    <Download/>
    <Email/>
    <Footer/>
    </>
  )
}

export default Home