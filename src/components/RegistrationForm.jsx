import "./RegistrationForm.css";
import { useState } from "react";
export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = username === "" || email === "" || password === "";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        console.log(formData.get("username"));
        console.log(formData.get("email"));
        console.log(formData.get("password"));
        console.log("Form Submitted");
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit" disabled={isDisabled}>
        Register
      </button>
    </form>
  );
}
