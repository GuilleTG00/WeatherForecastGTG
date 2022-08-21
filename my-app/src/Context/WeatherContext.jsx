import { createContext } from "react";

const initialState = {
    latitude: 0,
    longitude: 0,
    timezone: null,
    current_weather: null,
}

const WeatherContext = createContext(initialState);

export default WeatherContext;