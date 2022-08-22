import { useSelector, useDispatch } from "react-redux";
export default function Input() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.search);
  return <input type="text" className="col-span-3 p-8 border border-neutral-300 rounded" value={search} onChange={e => dispatch({ type: "SET_SEARCH", payload: e.target.value })} />;
}
