import Display from "./components/Display";
import Form from "./components/Form";
function App() {
  return (
    <div className="fixed inset-0 grid grid-cols-2 gap-x-2 p-4 bg-neutral-50">
      <Form />
      <Display />
    </div>
  );
}

export default App;
