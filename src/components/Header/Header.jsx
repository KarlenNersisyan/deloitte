import { useEffect, useState } from "react";
import {
  emailIcon,
  menuIcon,
  searchIcon,
} from "../../constants/utils.constant";
import { getCategories } from "../../service/service";

import classes from "./Header.module.css";

function Header({
  handleEmailClick,
  setFilter,
  handleBtnClick,
  count,
  searchCats,
  notFoundSearch,
}) {
  const [headerElement, setHeaderElement] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    getCategories()
      .then((res) => {
        setHeaderElement(res);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.menuBlock} onClick={handleBtnClick}>
        <i className={menuIcon}></i>
      </div>
      <div className={classes.logoBlock} onClick={() => setFilter("ALL")}>
        {loading && <b>Loading ...</b>}
        {error && <p>ERROR ...</p>}
        <img src={headerElement.header_logo} className={classes.compLogo}></img>
      </div>
      <div className={classes.titleBlock}>
        <p className={classes.text}>
          {headerElement && headerElement.title.split("/")[0]}
        </p>
      </div>
      <div className={classes.searchBlock}>
        <div>
          <input
            type="text"
            onChange={(el) => searchCats(el)}
            className={classes.inputText}
            value={value}
            placeholder=" Search categories"
          />
          <i onClick={() => setFilter("ALL")} className={searchIcon}></i>
        </div>
        <div>
          {notFoundSearch && <p className={classes.errorSearch}> Not found </p>}
        </div>
      </div>
      <button
        onClick={handleEmailClick}
        className={classes.emailButton}
        disabled={count ? false : true}
      >
        <i className={emailIcon}></i> EMAIL <span>{count}</span>
      </button>
    </div>
  );
}

export default Header;
