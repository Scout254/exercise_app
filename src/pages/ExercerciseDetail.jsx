import React, { useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import { Detail, ExerciseVideos, SimilarExcercises } from '../components';

const ExercerciseDetail = () => {
const [{details},dispatch] = useStateValue();
  // useEffect(()=>{
  //   const fetchExercisesData = async () =>{
  //     const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
  //     const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

  //   }
  //   fetchExercisesData();
  // })
  return (
    <div>
      <Detail/>
      <ExerciseVideos/>
      <SimilarExcercises/>
    </div>
  )
}

export default ExercerciseDetail