import React from 'react';
import { DealsOnMoviePurchases, MostPopularMovies, NewToRent, OffersOnRental, TopMovies, TopNewReleases } from '../components';





const Movies = () => {

  return (
    <div>
  <TopNewReleases/>
  <DealsOnMoviePurchases/>
  <TopMovies/>
  <MostPopularMovies/>
  <OffersOnRental/>
  <NewToRent/>
    </div>
  )
}

export default Movies