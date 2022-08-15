import Task from "./Task";
import XButton from "./XButton";

export default function TodoItem({ task, setTasks, i }) {
  return (
    <div className="TodoItem">
      <Task task={task} />
      <XButton setTasks={setTasks} i={i} />
    </div>
  );
}
