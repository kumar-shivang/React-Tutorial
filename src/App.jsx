import LoginForm from "./components/LoginForm";
export default function App() {
  window.addEventListener("resize", (e) => {
    console.log(e.target.innerWidth);
  });
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
}
