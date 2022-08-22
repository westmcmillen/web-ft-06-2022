import Detail from "./Detail";

import { useSelector } from "react-redux";

export default function Details() {
  const main = useSelector(state => state.weather.main);
  const sys = useSelector(state => state.weather.sys);
  console.log(sys);
  return (
    <div className="h-full grid grid-cols-2 gap-4">
      <Detail data={"Low"} value={Math.round(main?.temp_min) + "°"} />
      <Detail data={"High"} value={Math.round(main?.temp_max) + "°"} />
      <Detail data={"Humidity"} value={Math.round(main?.humidity) + "°"} />
      <Detail data={"Feels Like"} value={Math.round(main?.feels_like) + "°"} />
      <Detail data={"Sunrise"} value={sys?.sunrise * 1000} />
      <Detail data={"Sunset"} value={sys?.sunset * 1000} />
    </div>
  );
}
