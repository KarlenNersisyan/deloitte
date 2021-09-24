import { useEffect, useState } from "react";
import classes from "./Menu.module.css";
import { getCategories } from "../../service/service";
import generateId from "../../helpers/idGenerator.helper";

function Menu() {
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCategories()
      .then((res) => {
        console.log(res);
        setCategories(res.cats);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <ul className={classes.categoriesMenu}>
        {loading ? <p>loading ...</p> : null}
        {error && <p>ERROR ...</p>}
        {categories
          ? categories.map((e) => {
              return <li key={generateId}>{e.name}</li>;
            })
          : null}
      </ul>
    </>
  );
}

export default Menu;
