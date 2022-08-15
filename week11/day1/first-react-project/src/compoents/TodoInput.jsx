export default function TodoInput({ inputValue, setInputValue }) {
  return (
    <form className="TodoInput" onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Add a Task" value={inputValue} onChange={e => setInputValue(e.target.value)} />
    </form>
  );
}
