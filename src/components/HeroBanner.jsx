import React from 'react'
import { banner } from '../assets'
const HeroBanner = () => {
  return (
    <div className='flex justify-between '>
      <div className='relative top-[250px] left-[150px] grid gap-4'>
      <h2 className='text-red-600 font-bold'>Fitness Club</h2>
      <h2 className='text-4xl'>Sweat,Smile</h2>
      <h2 className='text-4xl'>And Repeat</h2>
      <h2>checkout the most personalized excesises for you</h2>
      <button className='bg-red-600 h-[40px] w-[180px] text-white'>Explore Excerxises</button>
      <h1 className='text-9xl pt-[60px] text-red-100'>Excercises</h1>
      </div>
     <div> <img src={banner} alt="" className='h-[750px] w-[550px] absolute right-5 top-0'/></div>
    </div>
  )
}

export default HeroBanner