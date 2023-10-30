import Spinner from "./Spinner";

import { LiaTemperatureHighSolid } from "react-icons/lia";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";

const DisplayWeather = ({ weatherData, loading, background, weatherIcon }) => {
  const temp = weatherData.temp;
  const feelsLike = weatherData.feelsLike;
  const windSpeed = weatherData.windSpeed;
  const humidity = weatherData.humidity;
  const weatherCondition = weatherData.weatherCondition;
  const iconValue = weatherData.iconValue;
  console.log(iconValue);
  // const icon =weatherData.icon;
  const name = weatherData.name;

  // formatted values
  const formatTemp = Math.floor(temp);
  const formatWindSpeed = (windSpeed * 3.6).toFixed(1);

  return loading ? (
    <Spinner />
  ) : (
    <div className="flex flex-col mx-2 text-center items-center">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover bg-center bg-clip-text"
      >
        <h1 className="text-6xl md:text-[8rem] uppercase text-transparent font-extrabold ">
          {name}
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row text-[#F5F5F5]  items-center">
        <div className="flex flex-row">
          <div className="py-6 px-4 md:py-10">{weatherIcon}</div>

          <div className="flex flex-col items-center py-5">
            <p className="text-7xl md:text-[8rem]">{`${formatTemp}\u00b0C`}</p>
            <div className="h-[3px] w-[50%] rounded-full bg-[#F5F5F5] opacity-30 "></div>
            <p className="py-2 text-2xl">{weatherCondition}</p>
          </div>
        </div>

        <ul className="px-5 py-5 text-xl leading-10">
          <li className="flex gap-2 items-center">
            <LiaTemperatureHighSolid size={30} />
            {`${feelsLike}\u00b0`}
          </li>
          <li className="flex gap-2 items-center">
            <LuWind size={30} />
            {`${formatWindSpeed} kmph`}
          </li>
          <li className="flex gap-2 items-center">
            <WiHumidity size={30} />
            {`${humidity} %`}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DisplayWeather;
