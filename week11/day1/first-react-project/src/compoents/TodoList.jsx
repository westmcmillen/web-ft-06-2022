import TodoItem from "./TodoItem";

export default function TodoList({ tasks, setTasks }) {
  return (
    <div className="TodoList">
      <ul>
        {tasks.map((task, i) => (
          <TodoItem key={task} task={task} setTasks={setTasks} i={i} />
        ))}
      </ul>
    </div>
  );
}
