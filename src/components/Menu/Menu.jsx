import { useEffect, useState } from "react";
import cn from "classnames";

import { getCategories } from "../../service/service";
// import generateId from "../../helpers/idGenerator.helper";

import classes from "./Menu.module.css";
import Loading from "../Loading/Loading";

function Menu({ setFilter, setContentThumbnail, isActive }) {
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
    <div className={cn([classes.menu], { [classes.hide]: !isActive })}>
      <ul className={classes.categoriesMenu}>
        <li
          className={classes.categoriesItem}
          // onClick={() => setContentThumbnail()}
          onClick={() => setFilter("ALL")}
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
                key={Math.random()}
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
