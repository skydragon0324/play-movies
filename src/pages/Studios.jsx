import React from 'react'
import { LionsGateMovies, TwentiethCenturyMovies, DisneyMovies,Hbo } from '../components/studioComponents'


const Studios = () => {
  return (
    <div>
      <DisneyMovies/>
      <TwentiethCenturyMovies/>
      <Hbo/>
      <LionsGateMovies/>
    </div>
  )
}

export default Studios