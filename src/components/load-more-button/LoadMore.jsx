import React, { useEffect, useState } from 'react'
import './style.css'
export const LoadMore = ({url}) => { 
    const [data,setData]=useState([])
    const[count,setCount]=useState(0)
    const[loading,setLoading]=useState(false)
    const[isDisable,setIsDisable]=useState(false)
    const fetchData=async (url)=>{
        try {
            const response=await fetch(`${url}?skip=${count==0?0:count*20}&limit=20`)
            const info=await response.json()
            if(info){
                setData(info)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
    if(url!=='')fetchData(url)
    },[count])   
  console.log(data);
  return (
    <div className='L-wrapper'>
      <div className="L-container">
        {
             data && data.products &&  data.products.map((item)=>(
              <div className='card'>
                <img src={item.images} alt="" />
                <p>{item.title}</p>
              </div>
             ))
        }
        <button disabled={isDisable} onClick={()=>setCount(count+1)}>load more Images</button>
      </div>
    </div>
  )
}
