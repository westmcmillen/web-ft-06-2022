import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import Results from "./components/Results";
import Details from "./components/Details";
import { useEffect } from "react";
// - I should be able to search for a movie and see all the results pop up for the movie containing my keyword
// - I should be able to click on one of the movies, and be navigated to a separate page, that page will have details about the movie i clicked on
// - I should be able to navigate to an About page and see the URL change

function App() {
  const [search, setSearch] = useState("");
  const [resultData, setResultData] = useState([]);
  const [detailData, setDetailData] = useState({});
  const [type, setType] = useState("movie");
  const [id, setId] = useState("");

  const fetchResults = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&${type}&apikey=${process.env.REACT_APP_API_KEY}`);
    const json = await response.json();
    setResultData(() => json.Search);
  };

  const fetchDetails = async () => {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&${type}&apikey=${process.env.REACT_APP_API_KEY}`);
    const json = await response.json();
    console.log("ID", id);
    console.log(json);
    setDetailData(() => json);
    return json;
  };

  return (
    <div className="relative w-full min-h-screen bg-neutral-100">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search fetchResults={fetchResults} setResultData={setResultData} search={search} setSearch={setSearch} type={type} setType={setType} />
              <Results resultData={resultData} type={type} setId={setId} />
            </>
          }
        ></Route>
        <Route
          path={`/details/${id}`}
          element={
            <>
              <Search fetchResults={fetchResults} setResultData={setResultData} search={search} setSearch={setSearch} type={type} setType={setType} />
              <Details fetchDetails={fetchDetails} id={id} type={type} detailData={detailData} />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
