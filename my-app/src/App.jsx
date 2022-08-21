import { Button, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

import NavBar from './UI/NavBar';
import MainPosts from './UI/MainPosts';

import { testValidation } from './APIcall.js'

import './App.css';


const OK_STATUS = 200;

const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const weatherContext = {
    ...weatherInfo.data,
  }
  
  const getWeatherFromAPI = async () => {
    const { data, status } = await testValidation();
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
      <body>
        <MainPosts 
          weatherInfo={weatherInfo}
        />
      </body>
    </div>
  );
}

/*
import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';

import { useEffect } from 'react';

const NavBar = () => {
    const [temperatureType, setTemperatureType] = useState('');

    return (
        <div className="App">
    <Grid 
      container 
      className="testingContainer"
      alignItems="center"
    >
      <Grid
      item xs={8}
      >
        <h2>
          <b> RTLForecast </b>
        </h2>
      </Grid>
        <Grid 
          container 
          xs={4}
          alignItems="center"
          direction="column"
          padding={3}
        >
      <Grid
        container
        direction="row"
        wrap="nowrap"
        xs={8}
      >
        Select temperature type:
        <Button
        onClick={() => setTemperatureType('C')}
        >
          Celsius (C°)
        </Button>
        <Button
        onClick={() => setTemperatureType('F')}
        >
          Fahrenheit (F°)
        </Button>
      </Grid>
    </Grid>
    </Grid>
    </div>
    )    
}

export default NavBar;
*/

export default App;
