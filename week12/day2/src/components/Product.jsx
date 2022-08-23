import { useDispatch } from "react-redux";

import addToCart from "../actions/addToCart";

export default function Product(props) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center p-4 border border-neutral-300 rounded">
      <div className="flex flex-col items-start">
        <h6 className="">{props.product.title}</h6>
        <div className="flex justify-center items-center">
          <ul className="">
            {props.product.desc.map(detail => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <span className="text-[10rem]">{props.product.src}</span>
        </div>
      </div>
      <span className="p-4">{"$" + props.product.price}</span>
      <button className="w-full py-3 px-5 bg-indigo-400 hover:bg-indigo-500 rounded text-white" onClick={() => addToCart(dispatch, props.product)}>
        Add to Cart
      </button>
    </div>
  );
}
