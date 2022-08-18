import { useEffect, useState } from "react";
// import { omdb } from "./api/omdb";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?t=${"hook"}&apikey=${process.env.REACT_APP_API_KEY}`);
      const json = await response.json();
      setData(() => {
        return json;
      });
    };
    fetchData();
  }, []);
  console.log("***", data);
  return <h1>Test</h1>;
}

export default App;
