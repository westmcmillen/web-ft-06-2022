export default function Card({ item }) {
  return (
    <div className="p-4 bg-white border border-neutral-300">
      <h1 className="">{item.Title}</h1>
    </div>
  );
}
