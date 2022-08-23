export default function Detail({ data, value }) {
  return (
    <div className="flex between shadow rounded">
      <h4 className="w-full h-full flex justify-center items-center p-8 bg-emerald-500 rounded-l text-lg text-white">{data}</h4>
      <h5 className="w-full h-full flex justify-center items-center p-8 rounded-r text-lg">{value}</h5>
    </div>
  );
}
