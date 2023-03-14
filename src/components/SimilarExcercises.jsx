import React from 'react'
import { useStateValue } from '../StateProvider'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
const SimilarExcercises = () => {
  const [{targetExercise,equipmentExcercise}] = useStateValue();

  return (
    <div>
      <div>
        <h1 className='text-4xl'>Exercises that target the same target muscle group</h1>
     <Swiper
     slidesPerView={3}
     >
     {targetExercise?.map((item)=>(
         <SwiperSlide key={item.id}>
           <div >
            <img src={item?.gifUrl} alt="" />
            {item.name}
            {item.equipment}
            {item.target}
            {item.bodyPart}
          </div>
         </SwiperSlide>
        ))}
     </Swiper>
      </div>
      <div>
        <h1 className='text-4xl'>Excercises with similar Equipements</h1>
      <Swiper
       slidesPerView={3}
       >
      {equipmentExcercise?.map((item)=>(
          <SwiperSlide  key={item.id}>
            <div>
            <img src={item?.gifUrl} alt="" />
            {item.name}
            {item.equipment}
            {item.target}
            {item.bodyPart}
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default SimilarExcercises