import { createElement } from "react";
export default function UserFavoriteFood() {
  return createElement(
    "section",
    null,
    <h3>Favorite Foods</h3>,
    <ul
      // INFO: We can add css to components like this
      style={{
        listStyle: "none",
        border: "1px solid black",
        color: "red",
      }}
    >
      <li>Food</li>
      <li>Food</li>
      <li>Food</li>
    </ul>,
  );
}
