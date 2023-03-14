import React, { useEffect } from 'react'
import { bodypartMuscle, targetMuscle, equipmentMuscle } from '../assets'
import { useStateValue } from '../StateProvider'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const Detail = () => {
  const [{ details, excerciseVideos ,targetExercise,equipmentExcercise}, dispatch] = useStateValue();
  const { id, gifUrl, name, target, bodyPart, equipment } = details || {};

  useEffect(() => {
    const fetchVideosData = async () => {
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
      const excerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${name} exercise`, youtubeOptions);
      
      console.log(excerciseVideosData.contents);
      dispatch({
        type: "SET_EXERCISE_VIDEOS",
        excerciseVideos: excerciseVideosData.contents,
      });

      const targetExerciseData = await fetchData(`${youtubeSearchUrl}/exercises/target/${target}`,exerciseOptions);

      console.log(targetExerciseData);
      dispatch({
        type:"SET_TARGET_EXCERCISE",
        targetExercise:targetExerciseData,
      })
      const equipmentExcerciseData = await fetchData(`${youtubeSearchUrl}/exercises/equipment/${equipment}`,exerciseOptions);
      dispatch({
        type:"SET_EQUIPMENT_EXERCISE",
        equipmentExcercise:equipmentExcerciseData,
      })
      

    };
    
    if (name) {
      fetchVideosData();
    }
  }, [dispatch, name]);
    
  const extraDetail = [
    {
      icon: bodypartMuscle,
      name: bodyPart,
    },
    {
      icon: targetMuscle,
      name: target,
    },
    {
      icon: equipmentMuscle,
      name: equipment,
    },
  ];

  return (
<div className="flex">
  {id && (
    <div key={id} className="flex">
      <img src={gifUrl} alt="" className="mr-4" />
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="mt-2">
          Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve mood and gain energy.
        </p>
        <div className="flex mt-4 flex-col">
          {extraDetail?.map((item) => (
            <div key={item.name} className="flex items-center mr-4">
              <button className="bg-red-400 p-4 rounded-full">
                <img src={item.icon} alt="" />
              </button>
              <span className="ml-2">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default Detail;
