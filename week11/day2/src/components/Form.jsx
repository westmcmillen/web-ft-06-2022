import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";

export default function Form({ defaultForm, formData, setFormData }) {
  const validateForm = formData => {
    return Object.keys(formData).every(input => {
      switch (input) {
        case "firstName":
          const isFirstNameValidated = formData.firstName.replace(" ", "") !== "";
          return isFirstNameValidated;
        case "lastName":
          const isLastNameValidated = formData.lastName.replace(" ", "") !== "";
          return isLastNameValidated;
        case "email":
          const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const isEmailValidated = regexEmail.test(formData.email);
          return isEmailValidated;
        case "password":
          const isPasswordValidated = formData.password.replace(" ", "") !== "";
          return isPasswordValidated;
        default:
          return false;
      }
    });
  };

  return (
    <div className="h-max p-4 border border-neutral-300 rounded">
      <div className="flex justify-center items-center gap-x-4 mb-4">
        <FontAwesomeIcon icon={faPenClip} className="text-2xl" />
        <h1 className="text-4xl font-black text-neutral-900 text-center">Form</h1>
      </div>
      <form
        className="flex flex-col gap-y-2"
        onSubmit={e => {
          e.preventDefault();
          if (validateForm(formData)) {
            setFormData(defaultForm);
            return alert("Success");
          } else {
            return alert("Error");
          }
        }}
      >
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="py-2 px-4 border border-neutral-300 rounded"
          value={formData.firstName}
          onChange={e =>
            setFormData(() => {
              return { ...formData, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="py-2 px-4 border border-neutral-300 rounded"
          value={formData.lastName}
          onChange={e =>
            setFormData(() => {
              return { ...formData, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="py-2 px-4 border border-neutral-300 rounded"
          value={formData.email}
          onChange={e =>
            setFormData(() => {
              return { ...formData, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="py-2 px-4 border border-neutral-300 rounded"
          value={formData.password}
          onChange={e =>
            setFormData(() => {
              return { ...formData, [e.target.name]: e.target.value };
            })
          }
        />
        <input type="submit" value="Submit" className="py-2 px-4 bg-indigo-500 rounded text-neutral-50" />
        <div className="flex gap-x-4">
          <a href="http://www.facebook.com/" target={"_blank"} rel="noreferrer" className="w-full">
            <span className="flex justify-center items-center py-2 px-4 border border-neutral-300 rounded">Facebook</span>
          </a>
          <a href="http://www.twitter.com/" target={"_blank"} rel="noreferrer" className="w-full">
            <span className="flex justify-center items-center py-2 px-4 border border-neutral-300 rounded">Twitter</span>
          </a>
        </div>
      </form>
    </div>
  );
}
