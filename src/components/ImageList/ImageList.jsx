import Loading from "../Loading/Loading";

import classes from "./ImageList.module.css";

function ImageList({ error, loading, contentThumbnail }) {
  return (
    <>
      <div className={classes.ContentThumbnailImageList}>
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
