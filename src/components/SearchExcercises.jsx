import React, { useEffect, useState } from 'react'

import { useStateValue } from '../StateProvider';
import BodyParts from './BodyParts';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExcercises = () => {
  const[ search,setSearch] = useState("");
  const [{exercises,bodyparts},dispatch] = useStateValue();

  useEffect(()=>{
    const fetchExcercisesData = async()=>{
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);

      // console.log(bodyPartsData);
      dispatch({
        type:"SET_BODYPARTS",
        bodyparts:["all",...bodyPartsData],
      })
      
    };
    fetchExcercisesData();
   
  },[]);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
  
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      console.log('the searched exercises are:', searchedExercises);
  
      setSearch('');
  
      dispatch({
        type: 'SET_EXERCISES',
        exercises: searchedExercises,
      });
    }
  };
  
  
  return (
    <div>
    <div className='mt-[50vh] '>
      <h2 className='text-center text-4xl pb-[50px]'>Awesome Excercises<br/> You Should Know</h2>
      <div className='flex items-center justify-center'>
      <input
      value={search}
       type="text"
        placeholder='search something...' 
        className='border border-gray-400 outline-blue-300 h-[40px] w-[850px] pl-[20px] bg-white'
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
       
      <button className='bg-red-600 text-white h-[40px] w-[60px] '
      onClick={handleSearch}
      >Search</button>
      </div> 
       <BodyParts />
       
    </div>
    </div>
  )
}

export default SearchExcercises