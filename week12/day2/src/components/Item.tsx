import { useDispatch } from "react-redux";

import removeFromCart from "../actions/removeFromCart";

export default function Item(props: any) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center p-4 border border-neutral-300 rounded">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <h6 className="font-bold">{props.item.title}</h6>
          <span className="p-4">{"$" + props.item.price}</span>
        </div>
        <button className="py-3 px-5 border border-neutral-300 rounded text-white" onClick={() => removeFromCart(dispatch, props.item)}>
          ❌
        </button>
      </div>
    </div>
  );
}
