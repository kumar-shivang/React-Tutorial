import "./RegistrationForm.css";
import { useState } from "react";
export default function RegistrationForm({ setUsers }) {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formFields.username}
        onChange={(e) =>
          setFormFields((currentState) => {
            return { ...currentState, username: e.target.value };
          })
        }
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formFields.email}
        onChange={(e) =>
          setFormFields((currentState) => {
            return { ...currentState, email: e.target.value };
          })
        }
      />
      <button
        onClick={() => {
          setUsers((currentState) => {
            return [
              ...currentState,
              {
                id: currentState.length + 1,
                username: formFields.username,
                email: formFields.email,
              },
            ];
          });
        }}
      >
        Register
      </button>
    </form>
  );
}
