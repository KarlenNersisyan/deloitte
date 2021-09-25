import { useEffect, useState } from "react";
import { getCategories } from "../../service/service";
import generateId from "../../helpers/idGenerator.helper";

import classes from "./Menu.module.css";
import Loading from "../Loading/Loading";

function Menu({ setFilter, setContentThumbnail }) {
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.cats);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className={classes.menu}>
      <ul className={classes.categoriesMenu}>
        <li
          className={classes.categoriesItem}
          onClick={() => setContentThumbnail()}
        >
          Home
        </li>
        <li className={classes.categoriesItem} onClick={() => setFilter("ALL")}>
          All
        </li>
        {loading && <Loading />}
        {error && <p>ERROR ...</p>}
        {categories &&
          categories.map((e) => {
            return (
              <li
                className={classes.categoriesItem}
                onClick={() => setFilter(e.name)}
                key={generateId}
              >
                {e.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Menu;
