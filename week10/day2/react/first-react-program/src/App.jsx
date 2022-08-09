import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";

function App() {
  const name = "West";
  const students = ["Joe", "Joey F", "Joeseph"];
  return (
    <div className="App">
      <h1>{name}</h1>
      {students.map(student => (
        <Student student={student}></Student>
      ))}
    </div>
  );
}

export default App;
