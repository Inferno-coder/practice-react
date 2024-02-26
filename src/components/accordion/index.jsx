import React, { useState } from 'react'
import data from './data'
import './style.css'
export const Accordion= () => {
    const[selected,setSelected]=useState(null)
    const [enableMultiSelect,setEnableMultiSelect]=useState(false)
    const[multiple,setMultiple]=useState([])
    const handleSingleSelect=(id)=>{
     setSelected(selected===id ?null:id)
    }
    const handleEnableMultiSelect=(id)=>{
     const arr=[...multiple]
     const index=arr.indexOf(id)
     if(index===-1){
        arr.push(id)    
     }
     else arr.splice(index,1)
     setMultiple(arr)
    }
  return (
    <div>
        <h2>Accordion</h2>
        <div className="accordian">
        <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)}>Enable Multi Selection</button>
            {
                data && data.length >0 ?
                <div>
                    {
                        data.map(dataItem=>(
                         <div onClick={enableMultiSelect
                            ?()=>handleEnableMultiSelect(dataItem.id)
                            :()=>handleSingleSelect(dataItem.id)} className='item' key={dataItem.id}>
                            <div className='top'>
                            <h1 className='itemQuestion'>{dataItem.question}</h1>
                           <span >+</span>
                            </div>
                           {
                            enableMultiSelect
                            ?multiple.indexOf(dataItem.id)!==-1 && <h2 className='itemAnswer'>{dataItem.answer}</h2>

                            :multiple.splice(0, multiple.length) && selected===dataItem.id && multiple.indexOf(dataItem.id)===-1 ?
                            <h2 className='itemAnswer'>{dataItem.answer}</h2>
                            :null
                           } 
                         </div>   
                        ))
                    }
                </div>
                : <div><h1>No data available</h1></div>
            }
        </div>
    </div>
  )
}
