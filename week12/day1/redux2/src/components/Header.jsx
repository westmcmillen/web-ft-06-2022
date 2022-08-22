import Location from "./Location";
import Temperature from "./Temperature";

export default function Header() {
  return (
    <div className="shadow rounded">
      <Location />
      <Temperature />
    </div>
  );
}
