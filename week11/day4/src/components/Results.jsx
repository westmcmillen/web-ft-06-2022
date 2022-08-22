import Card from "./Card";
export default function Results({ resultData, type, setId }) {
  return (
    <div className="grid grid-cols-3 gap-4 container mx-auto p-4">
      {resultData
        ?.filter(item => item.Type === type)
        .map(item => (
          <Card key={item.imdbID} item={item} setId={setId} />
        ))}
    </div>
  );
}
