import React from 'react'
import { Excercises, HeroBanner, SearchExcercises } from '../components'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <SearchExcercises/>
      <Excercises/>
    </div>
  )
}

export default Home