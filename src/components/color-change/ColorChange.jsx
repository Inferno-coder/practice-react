import React, { useState } from 'react'
import './style.css'
export const ColorChange = () => {
    const [typeOfColor,setTypeOfColor]=useState('hex')
    const[color,setColor]=useState('#000000')
    const randomColor=(length)=>{
    return Math.floor(Math.random()*length)
    }
    const handleRandomHexColor=()=>{
     const arr=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
     let hexColor="#"
     for(let i=0;i<6;i++){
        hexColor+=randomColor(arr.length)
     }
     setColor(hexColor)
    }
    const handleRandomRGBColor=()=>{
    const r=randomColor(256)
    const g=randomColor(256)
    const b=randomColor(256)
    const col=`rgb(${r},${g},${b})`
    console.log(col);
    setColor(col)
    }
    return (
    <div>
        <div className="container" style={{backgroundColor:color}}>
            <div className='btns'>
                <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
                <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
                <button onClick={typeOfColor==='hex'
                ?handleRandomHexColor
                :handleRandomRGBColor
                }>Generate Random Color</button>
            </div>
            <h1>{typeOfColor==='hex'?'HEX':'RGB'}</h1>
            <h2>{color}</h2>
        </div>
    </div>
  )
}
