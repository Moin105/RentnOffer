import React from 'react'
import './Styles.css'
export default function Heading(props) {
  return (
    <h2 className='heading' style={{color:props.color,textAlign:props.textAlign}}>{props.content}</h2>
  )
}
 
export function Mheading(props){
    return (
        <h3 className='mheading' style={{color:props.color,textAlign:props.textAlign}}>{props.content}</h3>
    )
}
export function Sheading(props){
    return (
        <h4  className='sheading'style={{color:props.color,textAlign:props.textAlign}}>{props.content}</h4>
    )
}