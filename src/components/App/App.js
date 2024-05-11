import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Artists from '../Artists/Artist';
import Footer from '../Footer/Footer';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Appointment } from '../../Pages/Artists/Appointment';
import { Gallery } from '../../Pages/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <img src={require('../../resources/Background/ato.png')} alt='background-overlay' className='bg-img'/>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Body />
            <Artists />
            <Footer />
          </>
          } 
        />
        <Route path='/Appointment' element={ 
        <>
            <Appointment />
            <Footer />
        </>
        } 
        />
        <Route path='/Gallery/StudioFX' element={
          <>
            <Header />
            <Gallery name="Shane Singh" />
            <Footer />
          </>
        } 
        />
          <Route path='/Gallery/MadMenInk' element={
          <>
            <Header />
            <Gallery name="Ramon Gonazales" />
            <Footer />
          </>
        } 
        />


      </Routes>


      
    </div>
  );
}

export default App;
