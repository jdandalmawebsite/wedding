import React from 'react'
import { About, Countdown, Flipbook, Home, VideoWedding } from './Container'

const App = () => {
  return (
    <div>
      <Home/>
      <Countdown/>
      <About/>
      <VideoWedding/>
      <Flipbook/>
    </div>
  )
}

export default App