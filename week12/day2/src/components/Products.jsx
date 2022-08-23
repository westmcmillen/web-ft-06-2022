import { useAppSelector } from "../hooks/hooks";

import Product from "./Product";

export default function Products() {
  const products = useAppSelector(state => state.products);
  return (
    <div className="grid grid-cols-1 gap-2 p-2">
      <header className="">
        <h2 className="">Products</h2>
      </header>
      {products.map(product => (
        <Product key={product.title} product={product} />
      ))}
    </div>
  );
}
