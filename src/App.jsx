import { useEffect } from "react";
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from "./Context/Weather";

import './App.css'

function App() {
  const weather = useWeather();
    console.log(weather);

    useEffect(() => {
      //get current location here
      weather.fetchCurrentUserLocationData();
    },[]);



  return (
    <>
      <div className='App'>
        <h1>Weather Forecast</h1>
        <Input/>
        <Button onClick={weather.fetchData} value="Search"/>
        <Card/>
        {/* <Button value="Refresh"/> */}
      </div>
       
    </>
  )
}

export default App
