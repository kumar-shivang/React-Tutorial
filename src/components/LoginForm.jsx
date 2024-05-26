export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        console.log(formData.get("username"));
        console.log(formData.get("password"));
        console.log("Form Submitted");
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        name="username"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        name="password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
