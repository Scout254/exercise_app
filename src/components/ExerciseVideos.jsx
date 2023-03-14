import React from 'react'
import { useStateValue } from '../StateProvider';
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css'
const ExerciseVideos = () => {
   const[{excerciseVideos,details}, dispatch] = useStateValue();
   const {name} = details;
  return (
    <div>
      <h2 className='text-4xl'>watch {name} exercise videos</h2>
     <Swiper
     slidesPerView={3}
     >
      
     {excerciseVideos?.slice(0, 3)?.map((item, index) => (
         <SwiperSlide  key={index}>
           <a
           
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            
            
                {item.video.title}
           
              
                {item.video.channelName}
             
          
          </a>
         </SwiperSlide>
        ))}
      </Swiper>  
     
    </div>
  )
}

export default ExerciseVideos