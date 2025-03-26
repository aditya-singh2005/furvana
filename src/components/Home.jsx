import 'react'
import Navbar from './Navbar'
import SplineScene from './React Components/SplineScene'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <SplineScene />
      <div className="h-screen w-screen bg-gradient-to-t from-[rgba(244,208,136,255)] via-[rgba(201,184,156,255)] to-[rgba(146,141,130,255)]">
      <Section1 />
      <Section2 />
      <Section3 />
    
      <Footer />
    
      </div>

    </div>
  )
}

export default Home