export default function Search({ fetchData, search, setSearch, type, setType }) {
  return (
    <form
      className="flex gap-x-4 p-4 bg-white border border-neutral-300 rounded rounded shadow"
      onSubmit={e => {
        e.preventDefault();
        fetchData(search.replace(" ", "%"));
        setSearch("");
      }}
    >
      <button
        type="button"
        className={`px-8 rounded ${type === "movies" ? " bg-indigo-500 text-neutral-50" : "bg-neutral-100 border border-neutral-300"}`}
        onClick={() => {
          setType(() => "movies");
        }}
      >
        Movies
      </button>
      <button
        type="button"
        className={`px-8 rounded ${type === "series" ? " bg-indigo-500 text-neutral-50" : "bg-neutral-100 border border-neutral-300"}`}
        onClick={() => {
          setType(() => "series");
        }}
      >
        Series
      </button>
      <input
        type="text"
        name="search-bar"
        value={search}
        className="w-full p-4 bg-neutral-50 border border-neutral-300 rounded focus:outline-indigo-500"
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
      <button type="submit" className="px-8 bg-indigo-500 rounded text-neutral-50">
        Search
      </button>
    </form>
  );
}
