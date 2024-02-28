import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'
export const Stars = ({numOfStars=10}) => {
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);
    const handleMouseClick=(index)=>{
         setRating(index)
         console.log(index);
    }
    const handleMouseEnter=(index)=>{
          setHover(index)
        //   console.log(index<=hover);
    }
    const handleMouseLeave=()=>{
        setHover(rating)
    }
  return (
    <div>
        <div className="stars">
          {
            [...Array(numOfStars)].map((_,index)=>{
                index++;
               return  <FaStar 
                size={40}
                className={(hover >= index || rating >= index)?'active':'inactive'}
                key={index}
                onClick={()=>handleMouseClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave}
                /> 
            })
          }        
        </div>
    </div>
  )
}
