export default function LoginForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
}
