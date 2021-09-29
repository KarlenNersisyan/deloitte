import { useEffect, useMemo, useState } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";
import { getAppContents, getContentThumbnail } from "./service/service";
import Contact from "./components/Contact/Contact";
import ImageList from "./components/ImageList/ImageList";

import classes from "./App.module.css";

function App() {
  const [contentThumbnail, setContentThumbnail] = useState([]);
  const [appContents, setAppContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [isActive, setIsActive] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [count, setCount] = useState(0);
  const [imageList, setImageList] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const [notFoundSearch, setNotFoundSearch] = useState(false);

  const handleImageClick = () => {
    setImageList(!imageList);
  };

  const handleEmailClick = () => {
    setIsEmail(!isEmail);
  };

  const handleBtnClick = () => {
    setIsActive(!isActive);
  };

  const addSum = () => {
    setCount(count + 1);
  };

  const filteredContent = useMemo(() => {
    if (filter === "ALL") return appContents;
    return appContents.filter((content) => content.catName === filter);
  }, [appContents, filter]);

  const searchCats = (el) => {
    let categoriesItem = el.target.value;
    categoriesItem = categoriesItem
      ? categoriesItem[0].toUpperCase() + categoriesItem.slice(1)
      : categoriesItem;
    const categoriesList = filteredContent.map((elements) => elements.catName);
    const filterCategories = categoriesList.filter((item) =>
      item.startsWith(categoriesItem)
    );
    const filteredObject = filteredContent.filter(
      (el) => el.catName === filterCategories[0]
    );
    if (categoriesItem && filteredObject.length !== 0) {
      setFilterArray(filteredObject);
      setNotFoundSearch(false);
    } else if (categoriesItem && filteredObject.length === 0) {
      setNotFoundSearch(true);
      setFilterArray([]);
    } else {
      setNotFoundSearch(false);
      setFilterArray([]);
    }
  };

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
      <Header
        handleBtnClick={handleBtnClick}
        setFilter={setFilter}
        handleEmailClick={handleEmailClick}
        count={count}
        searchCats={searchCats}
        notFoundSearch={notFoundSearch}
      />
      <Contact isEmail={isEmail} handleEmailClick={handleEmailClick} />
      <div className={classes.App}>
        <Menu
          setFilter={setFilter}
          setContentThumbnail={setContentThumbnail}
          isActive={isActive}
        />
        <List
          handleImageClick={handleImageClick}
          count={count}
          filteredContent={
            filterArray.length !== 0 ? filterArray : filteredContent
          }
          error={error}
          loading={loading}
          addSum={addSum}
          imageList={imageList}
        />
      </div>
      {imageList && (
        <ImageList
          error={error}
          loading={loading}
          contentThumbnail={contentThumbnail}
          imageList={imageList}
          handleImageClick={handleImageClick}
        />
      )}
    </>
  );
}

export default App;
