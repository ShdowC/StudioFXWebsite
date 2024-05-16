import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Artists from '../Artists/Artist';
import Update from '../Updates/Update';
import Footer from '../Footer/Footer';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Appointment } from '../../Pages/Artists/Appointment';
import { Gallery } from '../../Pages/Gallery/Gallery';
import ShaneGallery from '../../Pages/Gallery/ShaneGallery';
import RamonGallery from '../../Pages/Gallery/RamonGallery';


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
            <Update />
            <Footer />
          </>
          } 
        />
        <Route path='/Appointment' element={ 
        <>
            <Header />
            <Appointment />
            <Footer />
        </>
        } 
        />
        <Route path='/Gallery/StudioFX' element={
          <>
            <Header />
            <Gallery name="Shane Singh" />
            <ShaneGallery token={process.env.REACT_APP_INS_TOKEN} limit={39} />
            <Footer />
          </>
        } 
        />
          <Route path='/Gallery/MadMenInk' element={
          <>
            <Header />
            <Gallery name="Ramon Gonazales" />
            <RamonGallery token={process.env.REACT_APP_INS_TOKEN2} limit={12} /> 

            <Footer />
          </>
        } 
        />


      </Routes>


      
    </div>
  );
}

export default App;

