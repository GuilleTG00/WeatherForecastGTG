import { Button, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

import NavBar from './NavBar';
import logo from './logo.svg';

import { testValidation } from './APIcall.js'

import './App.css';


const OK_STATUS = 200;

const App = () => {
  const [testing, setTesting] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(null);
  
  const getWeatherFromAPI = async () => {
    const { data, status } = await testValidation();
    console.log("Check API Info", data);
    console.log(status);
    if (status === OK_STATUS) {
      return data; 
    };
    return {};
  };
  
useEffect(() => {
  getWeatherFromAPI()
    .then(setWeatherInfo)
}, [])

  return (
    <div className="App">
    <NavBar />
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
