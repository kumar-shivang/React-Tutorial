import { createElement } from "react";
import styles from "./styles.module.scss";
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
      }}
      // INFO: This class/styling is added using SASS
      className={styles.food}
    >
      <li>Food</li>
      <li>Food</li>
      <li>Food</li>
    </ul>,
  );
}
