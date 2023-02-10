import React from 'react'
import './Input.css'
export default function Input({placeholder,label,type,color}) {
  return (
    <div className='input-container' style={{display:"block",width:"100%"}}>
    <div className='input-box'>
        <label className='label' style={{color:color}}>{label}</label>
        <input className='input' type={type} placeholder={placeholder}/>
    </div>
    </div>
  )
}
