import React from 'react'
import Rate from "../images/rates.png";
 

const Card = ({image}) => {

  return (
    <div>
         <div className="w-[18.25rem] h-[23.25rem] rounded-lg shadow-lg  p-4 ">
            <div className="pb-4">
              <img src={image} alt="" />
            </div>
            <div className='pl-[0.5rem] pr-[1rem]'>
            <div className="flex justify-between text-[0.75rem] mb-2  ">
              <p className='text-xs'>Desert King</p>
              <p className='text-xs'>1MBT per night</p>
            </div>
            <div className="flex justify-between  text-[0.75rem] mb-2">
              <p className='text-xs'>2345km away</p>
              <p className='text-xs'>available for 2 weeks stay</p>
            </div>
            <div>
              {" "}
              <img src={Rate} alt="" />{" "}
            </div>
            </div>
          </div>
    </div>
  )
}

export default Card