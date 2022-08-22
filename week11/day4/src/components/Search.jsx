export default function Search({ fetchResults, search, setSearch, type, setType }) {
  return (
    <form
      className="sticky top-0 p-4 bg-white shadow"
      onSubmit={e => {
        e.preventDefault();
        fetchResults(search.replace(" ", "%"));
        setSearch("");
      }}
    >
      <div className="flex gap-x-4 container mx-auto">
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
      </div>
    </form>
  );
}
