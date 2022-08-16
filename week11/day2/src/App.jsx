import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
function App() {
  const defaultForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(defaultForm);
  return (
    <div className="fixed inset-0 bottom-[unset] h-max grid grid-cols-2 gap-x-2 p-4 bg-neutral-50">
      <Form defaultForm={defaultForm} formData={formData} setFormData={setFormData} />
      <Display formData={formData} />
    </div>
  );
}

export default App;
