import { createElement } from "react";
export default function UserFavoriteFood() {
  return createElement(
    "section",
    null,
    <h3>Favorite Foods</h3>,
    <ul>
      <li>Food</li>
      <li>Food</li>
      <li>Food</li>
    </ul>,
  );
}
