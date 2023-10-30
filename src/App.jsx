import "./App.css";
import { useEffect, useState } from "react";
import LocationSearch from "./components/LocationSearch";
import DisplayWeather from "./components/DisplayWeather";
import { BsCloud, BsCloudHaze2 } from "react-icons/bs";
import { TiWeatherSunny } from "react-icons/ti";
import { BsCloudRainHeavy } from "react-icons/bs";
import { IoThunderstormOutline } from "react-icons/io5";
import { BsCloudSnow } from "react-icons/bs";
import { BsClouds } from "react-icons/bs";
import Rain from "./Assets/Images/Rain.jpg";
import Cloudy from "./Assets/Images/Cloudy.jpg";
import Haze from "./Assets/Images/Haze.jpg";
import Snow from "./Assets/Images/Snow.jpg";
import Thunderstorm from "./Assets/Images/Thunderstorm.jpg";
import Clear from "./Assets/Images/Clear.jpg";

function App() {
  const [cityName, setCityName] = useState("Lucknow");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    weatherCondition: "",
    icon: "",
    temp: null,
    feelsLike: "",
    humidity: null,
    windSpeed: null,
  });
  const [background, setbackground] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  // background + weather icon
  function handleBackground(iconValue) {
    // haze
    if (iconValue === "50d" || iconValue === "50n") {
      setbackground(Haze);
      setWeatherIcon(<BsCloudHaze2 size={100} />);
    }

    // clear
    if (iconValue === "01d" || iconValue === "01n") {
      setbackground(Clear);
      setWeatherIcon(<TiWeatherSunny size={100} />);
    }

    // rain
    if (iconValue === "10d" || iconValue === "10n" || iconValue === "9d") {
      setbackground(Rain);
      setWeatherIcon(<BsCloudRainHeavy size={100} />);
    }

    // thunderstorm
    if (iconValue === "11d") {
      setbackground(Thunderstorm);
      setWeatherIcon(<IoThunderstormOutline size={100} />);
    }

    // snow
    if (iconValue === "13d") {
      setbackground(Snow);

      setWeatherIcon(<BsCloudSnow size={100} />);
    }

    // clouds
    if (
      iconValue === "02d" ||
      iconValue === "02n" ||
      iconValue === "03d" ||
      iconValue === "03n" ||
      iconValue === "04d" ||
      iconValue === "04n"
    ) {
      setbackground(Cloudy);
      setWeatherIcon(<BsClouds size={100} />);
    }
  }
  useEffect(() => {
    handleBackground(weatherData.iconValue);
    console.log("bacground changed on iconValue change");
  }, [weatherData.iconValue]);

  return (
    <div
      style={{ backgroundImage:`url(${background})`} }
      className="h-screen w-screen bg-cover"
    >
      <div className="backdrop-blur-md backdrop-brightness-50 h-screen w-screen  flex flex-col justify-center items-center">
        <LocationSearch
          cityName={cityName}
          setCityName={setCityName}
          setWeatherData={setWeatherData}
          loading={loading}
          setLoading={setLoading}
          background={background}
          setbackground={setbackground}
        />
        <DisplayWeather
          cityName={cityName}
          weatherData={weatherData}
          loading={loading}
          background={background}
          weatherIcon={weatherIcon}
        />
      </div>
    </div>
  );
}

export default App;
