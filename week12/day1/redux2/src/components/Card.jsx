import Header from "./Header";
import Details from "./Details";
export default function Card() {
  return (
    <div className="flex flex-col gap-4 h-full p-4 bg-white border border-neutral-300 rounded">
      <Header />
      <Details />
    </div>
  );
}
