import React from 'react'
import { useStateValue } from '../StateProvider'
import { gym } from '../assets';

const BodyParts = () => {
  const [{bodyparts, bodypart}, dispatch] = useStateValue();
  
  return (
    <div className='flex justify-center items-center gap-[50px] py-12'>
      {bodyparts?.map((item) => (
        <div key={item.id}
          className='h-[40px] w-[40px]'
          onClick={() =>
            dispatch({
              type: 'SET_BODYPART',
              bodypart: item,
            })
          }
        >
          {bodypart && bodypart?.id === item.id ? (
            <div className='border-b-4 border-red-600'>
              <img src={gym} alt="" />
              {item.name}
            </div>
          ) : (
            <div>
              <img src={gym} alt="" />
              {item.name}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default BodyParts
