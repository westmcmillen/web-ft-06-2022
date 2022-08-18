import Card from "./Card";
export default function Results({ data, type }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data
        ?.filter(item => item.Type === type)
        .map(item => (
          <Card item={item} />
        ))}
    </div>
  );
}
