import { useEffect, useState } from "react";

import Search from "./components/Search";
import Results from "./components/Results";
// - I should be able to search for a movie and see all the results pop up for the movie containing my keyword
// - I should be able to click on one of the movies, and be navigated to a separate page, that page will have details about the movie i clicked on
// - I should be able to navigate to an About page and see the URL change

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState("movie");

  const fetchData = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&${type}&apikey=${process.env.REACT_APP_API_KEY}`);
    const json = await response.json();
    setData(() => json.Search);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="fixed inset-0 p-4 bg-neutral-100">
      <Search fetchData={fetchData} search={search} setSearch={setSearch} type={type} setType={setType} />
      <Results data={data} type={type} />
    </div>
  );
}

export default App;
