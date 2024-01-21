import React from "react";
import { VscPlayCircle } from 'react-icons/vsc'

const MoviesCard = ({ id, title, image, rating, icon, oldPrice, price }) => {
  return (
    // ========THIS IS THE TOP MOVIES CARD, IT RECEIVES  FIVE DEFINED PROPERTIES===================
    <div className="" key={id}>
      <img src={image} className="" alt="Movies" width="100%" height="276px" />
      <div className="">
        <span className="text-left">{title}</span>
      </div>
      <div className="d-flex justify-content-start align-items-center">
        <span className="text-left">{rating}</span>
        <span className="m-1">{icon}</span>
        <span className="m-1 text-decoration-line-through">{oldPrice}</span>
        <span className="m-1">{price}</span>
      </div>
      <VscPlayCircle className='playIcon1'/>
    </div>
  );
};

export default MoviesCard;
