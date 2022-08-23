import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/hooks";

import buyNow from "../actions/buyNow";

import Item from "./Item";
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useAppSelector(state => state.cart);
  return (
    <div className="flex flex-col gap-4 h-full p-2">
      <header className="">
        <h2 className="">Cart</h2>
      </header>
      <div className="flex flex-col gap-2 h-full p-2 border rounded">
        {cart.map(item => (
          <Item key={item} item={item} />
        ))}
      </div>
      <button className="w-full py-3 px-5 bg-indigo-400 hover:bg-indigo-500 rounded text-white" onClick={() => buyNow(dispatch)}>
        Buy Now
      </button>
    </div>
  );
}
