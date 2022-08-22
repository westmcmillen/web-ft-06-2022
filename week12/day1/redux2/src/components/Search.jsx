import Input from "./Input";
import Button from "./Button";

export default function Search({ getData }) {
  return (
    <form
      className="grid grid-cols-4 gap-2"
      onSubmit={e => {
        e.preventDefault();
        getData();
      }}
    >
      <Input />
      <Button />
    </form>
  );
}
