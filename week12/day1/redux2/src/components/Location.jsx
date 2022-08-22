import { useSelector } from "react-redux";
export default function Location() {
  const weather = useSelector(state => state.weather);
  return (
    <div className="flex flex-col items-center gap-y-2 p-8 bg-indigo-500 rounded-t text-white tracking-wide">
      <h2 className="text-4xl font-black">{weather.name}</h2>
      <h3 className="">{weather.weather?.[0].main}</h3>
    </div>
  );
}
