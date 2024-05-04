import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Artists from '../Artists/Artist';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={require('../../resources/Background/ato.png')} alt='background-overlay' className='bg-img'/>

      <Header />
      <Body />
      <Artists />
      <Footer />
    </div>
  );
}

export default App;
