// import generateId from "../../helpers/idGenerator.helper";
import Loading from "../Loading/Loading";
import cn from "classnames";

import classes from "./List.module.css";

function List({
  filteredContent,
  loading,
  error,
  addSum,
  count,
  handleImageClick,
  imageList,
}) {
  return (
    <div className={classes.list}>
      {loading && <Loading />}
      {error && <p>ERROR ...</p>}
      {filteredContent.map((e) => {
        return (
          <div
            className={cn([classes.generalListWrapper], {
              [classes.hide]: imageList,
            })}
            key={Math.random()}
          >
            <div className={classes.nameCompany}>
              <h2>{e.catName}</h2>
            </div>
            <div className={classes.descriptionCompany}>
              <b>{e.description}</b>
            </div>
            <div className={classes.infoBlock}>
              {e.contentInf &&
                e.contentInf.map((elem) => {
                  return (
                    <div key={Math.random()} className={classes.textName}>
                      <div
                        onClick={handleImageClick}
                        className={classes.imageBlockItem}
                      >
                        <a href={elem.download_link} target="_blank" download>
                          <img
                            src={elem.image}
                            alt={elem.name}
                            width="310"
                            height="180"
                          />
                        </a>
                      </div>
                      <div className={classes.wrapper}>
                        <p>{elem.name.split().splice(0, 20)}</p>
                        <button
                          onClick={addSum}
                          className={classes.wrapperItem}
                          disabled={count ? true : false}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
