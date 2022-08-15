import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import AddButton from "./AddButton";

import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="TodoApp">
      <TodoHeader />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <TodoInput inputValue={inputValue} setInputValue={setInputValue} />
      <AddButton setTasks={setTasks} inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}
