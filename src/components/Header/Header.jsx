import { useEffect, useState } from "react";
import { emailIcon, menuIcon, searchIcon } from "../../constants/utils";
import { getCategories } from "../../service/service";

import classes from "./Header.module.css";

function Header({ handleEmailClick, setFilter, handleBtnClick }) {
  const [headerElement, setHeaderElement] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      <div onClick={handleBtnClick}>
        <i className={menuIcon}></i>
      </div>
      <div onClick={() => setFilter("ALL")}>
        {loading && <b>Loading ...</b>}
        {error && <p>ERROR ...</p>}
        <img src={headerElement.header_logo} className={classes.compLogo}></img>
      </div>
      <div>
        <p className={classes.text}>
          {headerElement && headerElement.title.split("/")[0]}
        </p>
      </div>
      <div
        onClick={() => {
          alert("Hello everyone, good start to the day.");
        }}
      >
        <i className={searchIcon}></i>
      </div>
      <div onClick={handleEmailClick} className={classes.emailButton}>
        <i className={emailIcon}></i> EMAIL
      </div>
    </div>
  );
}

export default Header;
