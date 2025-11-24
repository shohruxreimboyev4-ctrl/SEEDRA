import React from 'react'
import HEADER from '../components/HEADER'
import Showcase from '../components/Showcase'
import Tagline from '../components/Tagline'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div>
      <Showcase/>
      <Tagline/>
      <Hero/>
    </div>
  )
}

export default HomePage