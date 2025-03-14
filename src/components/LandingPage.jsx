import React from 'react'
import Navbar from './Navbar'
import SplineScene from './SplineScene'


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SplineScene />
      <div className="h-screen w-screen bg-gradient-to-t from-[rgba(244,208,136,255)] via-[rgba(201,184,156,255)] to-[rgba(146,141,130,255)]"></div>
      

    </div>
  )
}

export default LandingPage