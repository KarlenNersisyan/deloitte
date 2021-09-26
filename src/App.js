// import { useEffect, useState } from "react";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import { getAppContents, getContentThumbnail } from "./service/service";

import classes from "./App.module.css";
import ImageList from "./components/ImageList/ImageList";
import Contact from "./components/Contact/Contact";

function App() {
  const [contentThumbnail, setContentThumbnail] = useState([]);
  const [appContents, setAppContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = () => {
    setIsActive(!isActive);
  };

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

  useEffect(() => {
    getContentThumbnail()
      .then((res) => {
        setContentThumbnail(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <Header handleBtnClick={handleBtnClick} setFilter={setFilter} />
      <Contact />
      <div className={classes.App}>
        <Menu
          setFilter={setFilter}
          setContentThumbnail={setContentThumbnail}
          isActive={isActive}
        />
        <List
          filteredContent={filteredContent}
          error={error}
          loading={loading}
        />
      </div>
      <ImageList
        error={error}
        loading={loading}
        contentThumbnail={contentThumbnail}
      />
    </>
  );
}

export default App;
