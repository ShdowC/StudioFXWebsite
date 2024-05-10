import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Artists from '../Artists/Artist';
import Footer from '../Footer/Footer';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { Appointment } from '../../Pages/Artists/Appointment';

function App() {
  return (
    <div className="App">
      <img src={require('../../resources/Background/ato.png')} alt='background-overlay' className='bg-img'/>
      <Routes>
        <Route path='/index.html' element={
          <>
            <Header />
            <Body />
            <Artists />
            <Footer />
          </>} 
        />
        <Route path='/Appointment' element={ <Appointment /> } />
      </Routes>


      
    </div>
  );
}

export default App;
