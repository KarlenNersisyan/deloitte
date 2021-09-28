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
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeGenIndex, setActiveGenIndex] = useState(0);

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
          className={
            activeGenIndex === 0
              ? `${classes.categoriesItem} ${classes.activeGen}`
              : classes.categoriesItem
          }
          // onClick={() => setContentThumbnail()}
          onClick={() => {
            setFilter("ALL");
            setActiveGenIndex(0);
          }}
        >
          Home
        </li>
        <li
          className={
            activeGenIndex === 1
              ? `${classes.categoriesItem} ${classes.activeGen}`
              : classes.categoriesItem
          }
          onClick={() => {
            setFilter("ALL");
            setActiveGenIndex(1);
          }}
        >
          All
        </li>
        {loading && <Loading />}
        {error && <p>ERROR ...</p>}
        {categories &&
          categories.map((e, index) => {
            return (
              <li
                className={
                  activeIndex === index
                    ? `${classes.categoriesItem} ${classes.active}`
                    : classes.categoriesItem
                }
                onClick={() => {
                  setActiveIndex(index);
                  setFilter(e.name);
                }}
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
