import React from 'react'
import { About, Countdown, Details, Flipbook,  Footer,  Gallery,  Home, ReceptionTimeline, Share, Traditions, VideoWedding } from './Container'
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Countdown/>
      <About/>
      <VideoWedding/>
      <Details/>
      <Traditions/>
      <ReceptionTimeline/>
      <Flipbook/>
      <Gallery/>
      <Share/>
      <Footer/>
  
    </div>
  )
}

export default App