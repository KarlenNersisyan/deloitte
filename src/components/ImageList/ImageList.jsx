import cn from "classnames";
import Loading from "../Loading/Loading";

import classes from "./ImageList.module.css";

function ImageList({
  error,
  loading,
  contentThumbnail,
  imageList,
  handleImageClick,
}) {
  return (
    <>
      <div
        className={cn([classes.ContentThumbnailImageList], {
          [classes.hide]: !imageList,
        })}
      >
        <div className={classes.ImageList}>
          <h1>Images List</h1>
        </div>
        <button onClick={handleImageClick} className={classes.closeList}>
          X
        </button>
        {loading && <Loading />}
        {error && <p>ERROR ...</p>}
        {contentThumbnail &&
          contentThumbnail.map((e) => {
            return (
              <div key={Math.random()} className={classes.imageBlock}>
                <img
                  className={classes.ContentThumbnail}
                  src={e.url}
                  width="300"
                  height="160"
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ImageList;
