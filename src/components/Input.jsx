import React from "react";
import { useWeather } from '../Context/Weather';

const Input = () => {
    const Weather = useWeather();
    console.log("Weather", Weather);
    return (
        <input className="input-filed" placeholder="Search here"
        value={Weather.searchCity}
        onChange={(e) => Weather.setSearchCity(e.target.value)}/> 
    )
}
export default Input; 