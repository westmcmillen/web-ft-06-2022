import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/hooks";
import { createClient } from "@supabase/supabase-js";

import buyNow from "../actions/buyNow";

import Item from "./Item";

declare const process: {
  env: {
    REACT_APP_SUPABASE_URL: string;
    REACT_APP_SUPABASE_ANON_KEY: string;
  };
};

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useAppSelector(state => state.cart);
  const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);
  const sendToDatabase = async () => {
    const { data, error } = await supabase.from("ProductsDatabase").insert([{ name: "West", items: cart }]);
  };
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
      <button
        className="w-full py-3 px-5 bg-indigo-400 hover:bg-indigo-500 rounded text-white"
        onClick={() => {
          buyNow(dispatch);
          sendToDatabase();
        }}
      >
        Buy Now
      </button>
    </div>
  );
}
