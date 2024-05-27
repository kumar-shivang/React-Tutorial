import "./RegistrationForm.css";
import { useState } from "react";
export default function RegistrationForm() {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <form>
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
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formFields.password}
        onChange={(e) =>
          setFormFields((currentState) => {
            return { ...currentState, password: e.target.value };
          })
        }
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}
