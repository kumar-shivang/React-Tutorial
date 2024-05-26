export default function App() {
  let isBlue = false;
  return isBlue ? (
    <div style={{ color: "blue" }}>
      <h1>Hello World</h1>
    </div>
  ) : (
    <div style={{ color: "red" }}>
      <h1>Hello World</h1>
    </div>
  );
}
