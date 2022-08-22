import { useSelector } from "react-redux";
export default function Temperature() {
  const weather = useSelector(state => state.weather);
  return <h1 className="p-8 rounded-b text-[10rem] text-center font-black">{Math.round(weather.main?.temp)}°</h1>;
}
