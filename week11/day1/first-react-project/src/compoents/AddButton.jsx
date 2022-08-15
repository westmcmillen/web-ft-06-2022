export default function AddButton({ inputValue, setInputValue, tasks, setTasks }) {
  return (
    <button
      className="AddButton"
      type="submit"
      onClick={() => {
        setTasks(prevTasks => [...prevTasks, inputValue]);
        setInputValue("");
      }}
    >
      Add
    </button>
  );
}
