export default function XButton({ setTasks, i }) {
  return (
    <button
      className="XButton"
      onClick={() => {
        setTasks(prevTasks => [...prevTasks].filter(task => task !== [...prevTasks][i]));
      }}
    >
      ❌
    </button>
  );
}
