import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Search from "./components/Search";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

function App() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  const getData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search},us&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch({ type: "SET_WEATHER", payload: json });
    dispatch({ type: "SET_SEARCH", payload: "" });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="fixed inset-0 p-4 bg-neutral-50">
      <div className="flex flex-col h-full container space-y-4 mx-auto">
        <Card />
        <Pagination />
        <Search getData={getData} />
      </div>
    </div>
  );
}

export default App;
