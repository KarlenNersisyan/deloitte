// import { useEffect, useState } from "react";
import classNames from "classnames";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import classes from "./App.module.css";
// import { getCategories, getCoreFields } from "./service/service";

function App() {
  // const [categories, setCategories] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   getCoreFields().then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <>
      <Header />
      <div className={classes.App}>
        <Menu />
        <List />
      </div>
    </>
  );
}

export default App;
