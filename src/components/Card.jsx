import React from "react";
import { useWeather } from "../Context/Weather";

const Card = () => {
    const weather = useWeather();
    return(
        <div className="card">
            <img id="img1" src={weather?.data?.current?.condition?.icon}></img>
            <h2>{weather.data?.current?.temp_c} C</h2>
            <h4>{weather.data?.location?.name}, {weather.data?.location?.region} {weather.data?.location?.country}</h4>
        </div>
    )
}
export default Card;