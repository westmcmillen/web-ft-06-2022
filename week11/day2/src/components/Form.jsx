import { useState } from "react";
export default function Form() {
  const defaultForm = {
    name: "",
    email: "",
    address: "",
    password: "",
  };
  const [formData, setFormData] = useState(defaultForm);

  const validateInput = e => {
    switch (e.target.name) {
      case "name":
        const regexName = /^.{6,}$/;
        setFormData(() => {
          return { ...formData, [e.target.name]: e.target.value };
        });
        break;
      case "address":
        setFormData(() => {
          return { ...formData, [e.target.name]: e.target.value };
        });
        break;
      case "email":
        const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        setFormData(() => {
          return { ...formData, [e.target.name]: e.target.value };
        });
        break;
      case "password":
        setFormData(() => {
          return { ...formData, [e.target.name]: e.target.value };
        });
        break;
    }
  };
  return (
    <div className="p-4 border border-neutral-300 rounded">
      <h1 className="mb-4 text-4xl font-black text-neutral-900 text-center">Form</h1>
      <form className="flex flex-col gap-y-2">
        <input name="name" type="text" placeholder="Name" className="py-2 px-4 border border-neutral-300 rounded" value={formData.name} onChange={e => validateInput(e)} />
        <input name="email" type="email" placeholder="Email" className="py-2 px-4 border border-neutral-300 rounded" value={formData.email} onChange={e => validateInput(e)} />
        <input name="address" type="text" placeholder="Address" className="py-2 px-4 border border-neutral-300 rounded" value={formData.address} onChange={e => validateInput(e)} />
        <input name="password" type="password" placeholder="Password" className="py-2 px-4 border border-neutral-300 rounded" value={formData.password} onChange={e => validateInput(e)} />
        <input type="submit" value="Submit" className="py-2 px-4 bg-indigo-500 rounded text-neutral-50" />
      </form>
    </div>
  );
}
