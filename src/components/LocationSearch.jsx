import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const LocationSearch = ({
  setWeatherData,
  cityName,
  setCityName,
  setLoading,
}) => {
  async function fetchData(cityName) {
    setLoading(true);

    // test code
    console.log("Inside the hook with city name:");
    console.log(cityName);

    const urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;

    try {
      const { data } = await axios.get(urlCity);
      console.log(data);
      console.log(data[0]);

      let lat = data[0].lat;
      let lon = data[0].lon;

      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;

      const dataWeather = await axios.get(urlWeather);
      console.log(dataWeather);

    
      setWeatherData({
        name: dataWeather.data.name,
        weatherCondition: dataWeather.data.weather[0].main,
        iconValue:  dataWeather.data.weather[0].icon,
        // icon: icon,
        temp: dataWeather.data.main.temp,
        feelsLike: dataWeather.data.main.feels_like,
        humidity: dataWeather.data.main.humidity,
        windSpeed: dataWeather.data.wind.speed,
      });
    } catch (err) {
      alert("Enter valid data");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData("lucknow");
  }, []);
  

  return (
    <div className="flex w-2/5 md:w-1/4 h-16 rounded-full bg-[#F5F5F5] absolute top-10 justify-center items-center">
      <input
        className="py-3 px-2 mx-6  h-3/5 w-full outline-none default:content-none text-grey bg-[#F5F5F5]"
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
      />

      <button
        className="h-3/5 px-3 mr-6 bg-[#F5F5F5] group rounded-full "
        onClick={() => fetchData(cityName)}
      >
        <FiSearch className="group-hover:scale-125 duration-300" />
      </button>
    </div>
  );
};

export default LocationSearch;
