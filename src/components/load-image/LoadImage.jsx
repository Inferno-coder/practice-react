import React, { useEffect, useState } from 'react'
import './style.css'
import{BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
export const LoadImage = ({url,page,limit}) => {
    const[loading,setLoading]=useState(false)
    const[images,setImages]=useState([])
    const[err,setErr]=useState(null)
    const fetchImage=async(getUrl)=>{
        try {
            setLoading(true)
            const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data=await response.json()
            if(data){
                setImages(data)
                setLoading(false)
            }
        } catch (error) {
            setErr(error)
            setLoading(false)
        }
    }

    useEffect(()=>{

      if(url!=='')fetchImage(url)
    },[url])
    if(loading)return <h1 className='loadingText'>Please wait ! Images are Loading ......</h1>
   if(err!==null)return <h1 className='error-text'>Error Occurred{err}</h1>
   //  console.log(images);
  return (
    <div className='outer'>
    <div className='wrapper'>
      <div></div>
      <div className="up">
      <BsArrowLeftCircleFill className='arrow arrow-left'/>
      {images && images.length
        ? images.map((imageItem) => (
        <img
        key={imageItem.id}
        alt={imageItem.download_url}
        src={imageItem.download_url}
        className="current-image"
        />
        ))
        :null} 
      <BsArrowRightCircleFill className='arrow arrow-right' />
      </div>
      <span className='circle-indicator'>
      {images && images.length
        ? images.map((_,index) => (
          <button key={index} className='current-indicator'></button>
        ))
        :null} 
      </span>
    </div>
    </div>
  )
}
