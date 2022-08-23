import { useDispatch } from "react-redux";

import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 bg-neutral-50">
      <div className="grid grid-cols-2 gap-4 h-full p-4 container mx-auto">
        <div className="bg-white border border-neutral-300 shadow rounded overflow-scroll">
          <Products />
        </div>
        <div className="flex flex-col bg-white border border-neutral-300 shadow rounded">
          <div className="h-full overflow-scroll">
            <Cart />
          </div>
          <span className="text-4xl">{}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
