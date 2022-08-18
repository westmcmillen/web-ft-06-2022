export const omdb = async search => {
  const response = await fetch(`http://www.omdbapi.com/?t=${search}&apikey=${process.env.REACT_APP_API_KEY}`);
  const json = await response.json();
  return json;
};
