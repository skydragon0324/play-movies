import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
const TopMoviesCard = ({number,id,title, image,rating,pG,category, icon,price}) => {
  return (

    // ========THIS IS THE THE TOP MOVIES CARD===============
    <div className='d-flex justify-content-center m-1'key={id}>
      <span className='m-4'>{number}</span>
    <img src={image} class="" alt="top movies" width='120px'/>
    <div class="d-flex flex-column justify-content-start align-items-center">
      <span class="m-1 text-wrap">{title}</span>
      <span class="m-1">{pG}</span>
      <span class="m-1">{category}</span>
      <div class="m-1 d-flex align-items-center">
      <span class="m-1">{rating}</span>
      <span class="m-1">{icon}</span>
      <span class="m-1">{price}</span>
    </div>
    </div>
    <BsPlayCircle className='playIcon' stroke="currentColor" strokeWidth=".3"/>
     </div>
  
  )
}

export default TopMoviesCard