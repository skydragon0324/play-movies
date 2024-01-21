import React, { useState } from "react";
import { MoviesCard } from "../../cards";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import {  lionsGateMovies  } from "../../data/dummyData";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const LionsGateMovies = () => {
  const [movies] = useState(lionsGateMovies);

  return (
    // ================HERE, WE ARE IMPORTING THE MOVIES FROM DUMMY DATA FILE INSIDE THE DATA FOLDER, THEN WE PARSE IT INTO THE MOVIE CARD INSIDE THE CARDS FOLDER
    <div className="w-100 d-flex flex-column justify-content-start m-4">
      <div className=" d-flex flex-column justify-content-start">
        <h2 className="text-dark font-weight-bold">Lionsgate Movies</h2>
      </div>
      <div className="moviesContainer  d-flex align-items-center overflow-hidden">
        <Swiper
          id="swiper"
          virtual
          slidesPerView={6}
          spaceBetween={5}
          onReachEnd={() => {}}
          navigation
          pagination
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="movieItem">
                <MoviesCard
                  id={movie.id}
                  image={movie.image}
                  title={movie.title}
                  rating={movie.rating}
                  icon={movie.icon}
                  oldPrice={movie.oldPrice}
                  price={movie.price}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LionsGateMovies;
