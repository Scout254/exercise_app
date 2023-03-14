import React from 'react'
import { ExercerciseDetail, Home } from './pages'
import { Footer, Navbar } from './components'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExercerciseDetail/>}/>
      </Routes>
     
    </div>
  )
}

export default App