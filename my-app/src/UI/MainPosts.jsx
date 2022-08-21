import _ from 'lodash';

import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';

import { useEffect } from 'react';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const componentMap = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

const MainPosts = ({ weatherInfo }) => {

const obtainWeatherData = () => {
    const { latitude, longitude } = weatherInfo;
    console.log("esta es la latitud", latitude);
    console.log("esta es la longitud", longitude);
}

useEffect(() => {
  if (!_.isNil(weatherInfo)) {
    obtainWeatherData();
};
}, [weatherInfo]);

    return (
        <div className="App">
    <Grid 
      container 
      className="mainComponent"
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
        //onClick={() => setTemperatureType('C')}
        >
          Celsius (C°)
        </Button>
        <Button
        //onClick={() => setTemperatureType('F')}
        >
          Fahrenheit (F°)
        </Button>
      </Grid>
    </Grid>
    </Grid>
    </div>
    )    
}

export default MainPosts;
