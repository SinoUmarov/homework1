import React from 'react'
import './card.css'

const Rounde = ({bgColor, src, title}) => {
  return (
    <div style={{backgroundColor: bgColor}} className='rounde'>
        <img src={src} alt="" />
        <p className='title ff2'>{title}</p>
    </div>
  )
}

export default Rounde


export const Images =({src, title, price}) =>{
  return (
  <div className='imgCard'>
    <img className='picture' src={src} alt="" />
    <div className='infoImg'>
      <p className='lorem'>{title}</p>
      <b>{price}</b>
    </div>
  </div>    

  ) 
}