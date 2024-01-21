import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { NavbarComponent } from './components';
import { MoviesScreen } from './pages'
import './App.css'

const App = () => {
  return (
    <>
<NavbarComponent/>
<Routes>
  <Route path='/' element={<MoviesScreen/>}/>
  </Routes>
    </>
  )
}

export default App