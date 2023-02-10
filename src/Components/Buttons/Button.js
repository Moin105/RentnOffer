import React from 'react'
import './Button.css'
export default function Button({func,name,color,bg}) {
  return (
    <>
    <button className='btn'  style={{color:color,background:bg}}>{name}</button>
    </>
  )
}

export function  StaticButton({func,name,color,bg}) {
    return (
      <>
      <button className='static-btn' style={{color:color,background:bg}}>{name}</button>
      </>
    )
}
