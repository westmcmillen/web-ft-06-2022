import { Link } from "react-router-dom";
export default function Card({ item, setId }) {
  return (
    <button onClick={() => setId(item.imdbID)}>
      <Link to={`details/${item.imdbID}`}>
        <div className="flex flex-col justify-center items-center gap-y-4 p-4 bg-neutral-50 border border-neutral-300 rounded">
          <h1 className="text-xl text-center">{item.Title}</h1>
          <img src={item.Poster} alt={item.Title} className="rounded" />
        </div>
      </Link>
    </button>
  );
}
