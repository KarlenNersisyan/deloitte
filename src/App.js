// import { useEffect, useState } from "react";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import { getAppContents } from "./service/service";

import classes from "./App.module.css";

function App() {
  const [appContents, setAppContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [filter, setFilter] = useState("ALL");

  const filteredContent = useMemo(() => {
    if (filter === "ALL") return appContents;
    return appContents.filter((content) => content.catName === filter);
  }, [appContents, filter]);

  useEffect(() => {
    getAppContents()
      .then((res) => {
        setAppContents(res.contents);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <Header />
      <div className={classes.App}>
        <Menu setFilter={setFilter} />
        <List
          filteredContent={filteredContent}
          error={error}
          loading={loading}
        />
      </div>
    </>
  );
}

export default App;
