import React, { useState ,useEffect} from 'react'
import { useStateValue } from '../StateProvider'
import {useNavigate} from 'react-router-dom'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Pagination } from '@mui/material'
const Excercises = () => {
  const [{exercises,bodyparts,bodypart,details},dispatch] = useStateValue();
  const [currentPage, setCurrentPage] = useState(1)
  const excercisesPerPage = 9;
  const indexOfLastExcercise = currentPage * excercisesPerPage;
  const indexOfFirstExercise = indexOfLastExcercise - excercisesPerPage;
  
  const currentExcercises = exercises.slice(
    indexOfFirstExercise,indexOfLastExcercise
  );

  const paginate =(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1800 ,behaviour :"smooth"})
  }
  
  const navigate = useNavigate();
 
  
  const handleViewDetails=({id,name,target,bodyPart,gifUrl,equipment})=>{
    navigate(`/exercise/${id}`);
    dispatch({
      type:"SET_DETAILS",
      details:{
        id,
        name,
        gifUrl,
        target,
        bodyPart,
        equipment,
      }
    })
  }

  useEffect(()=>{
    const fetchedExercisesData = async()=>{
      let exercisesData =[];
  
      if(bodypart === "all"){
        exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",exerciseOptions);
  
      }else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseOptions)
      }
      dispatch({
        type:"SET_EXERCISES",
        exercises:exercisesData
      })
    };

    const fetchExcerciseDetails = (id)=>{

    }
    fetchExcerciseDetails();
    fetchedExercisesData();
  },[bodypart,dispatch])
  return (
    <div id='exercises' class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-12" style={{ minHeight: `${Math.ceil(currentExcercises.length/3) * 450}px` }}>

    {currentExcercises?.map((item) => (
      <div key={item.id} onClick={() => handleViewDetails(item)} class="relative bg-white rounded-lg shadow-sm cursor-pointer overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:border-b-4 hover:border-red-500">
        <img src={item.gifUrl} alt={item.name} class="w-full h-96 object-cover rounded-t-lg transition duration-300 ease-in-out transform hover:scale-110" />
        <div class="absolute bottom-0 left-0 right-0 px-3 py-2 rounded-b-lg">
          <h3 class="text-lg font-medium">{item.name}</h3>
          <div class="flex flex-wrap">
            <button class="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">{item.bodyPart}</button>
            <button class="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2">{item.target}</button>
            <button class="text-sm text-gray-600 bg-gray-200 rounded-full px-3 py-1 mb-2">{item.equipment}</button>
          </div>
        </div>
      </div>
    ))}
<div>
{currentExcercises?.length < 9 ? null : (
  <div className=''>
    <Pagination
      count={Math.ceil(exercises.length / excercisesPerPage)}
      color ="primary"
      defaultPage={1}
      page={currentPage}
      onChange={paginate}
      size="large"
    />
  </div>
)}

        </div>
  </div>
  
  

  
  
  

  )
}

export default Excercises