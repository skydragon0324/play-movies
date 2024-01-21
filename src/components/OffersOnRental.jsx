import React, { useState } from "react";
import { MoviesCard } from "../cards";
import { offersOnRentalsData } from "../data/dummyData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const OffersOnRental = () => {
  const [movies] = useState(offersOnRentalsData);

  const slides = [];

  for (let i = 0; i < movies.length; i++) {
    slides.push(
      <SwiperSlide key={movies[i].id}>
        <div className="movieItem">
          <MoviesCard
            id={movies[i].id}
            image={movies[i].image}
            title={movies[i].title}
            rating={movies[i].rating}
            icon={movies[i].icon}
            oldPrice={movies[i].oldPrice}
            price={movies[i].price}
          />
        </div>
      </SwiperSlide>
    );
  }

  return (
    // ================HERE, WE ARE IMPORTING THE MOVIES FROM DUMMY DATA FILE INSIDE THE DATA FOLDER, THEN WE PARSE IT INTO THE MOVIE CARD INSIDE THE CARDS FOLDER
    <div className="w-100 d-flex flex-column justify-content-start m-4">
      <div className=" d-flex flex-column justify-content-start">
        <h2 className="text-dark font-weight-bold">Offers on movie rentals</h2>
      </div>
      <div className="moviesContainer  d-flex align-items-center overflow-hidden">
        <Swiper
          id="swiper"
          virtual
          slidesPerView={6}
          spaceBetween={5}
          onReachEnd={() => {
            console.log("reach end");
            const tmp = slides.unshift();
            slides.push(tmp);
          }}
          navigation
          pagination
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default OffersOnRental;
