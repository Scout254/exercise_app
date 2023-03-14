import React from 'react'
import { logo2 } from '../assets'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center'>
     <Link to="/">
     <img src={logo2} alt="" className=''/>
     </Link>
     <div className='flex relative left-[350px]'>
     <Link to="/">
      <h2 className='px-[20px]'>Home</h2>
     </Link>
     <a href='#exercises'>
      <h2 className=''>Excercises</h2>
     </a>
     </div>
    </div>
  )
}

export default Navbar