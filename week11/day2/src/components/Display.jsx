import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

export default function Display({ formData }) {
  return (
    <div className="p-4 border border-neutral-300 rounded">
      <div className="flex justify-center items-center gap-x-4 mb-4">
        <FontAwesomeIcon icon={faTv} className="text-2xl" />
        <h1 className="text-4xl font-black text-neutral-900 text-center">Display</h1>
      </div>
      <ul className="flex flex-col gap-y-2">
        <input readOnly name="firstName" type="text" placeholder="First Name" className="py-2 px-4 border border-neutral-300 rounded text-neutral-500" value={formData.firstName} />
        <input readOnly name="lastName" type="text" placeholder="Last Name" className="py-2 px-4 border border-neutral-300 rounded text-neutral-500" value={formData.lastName} />
        <input readOnly name="email" type="email" placeholder="Email" className="py-2 px-4 border border-neutral-300 rounded text-neutral-500" value={formData.email} />
        <input readOnly name="password" type="password" placeholder="Password" className="py-2 px-4 border border-neutral-300 rounded text-neutral-500" value={formData.password} />
      </ul>
    </div>
  );
}
