import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Questions from '../components/Questions'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Questions/>
    </div>
  )
}

export default Home