import { useEffect, useState } from "react";
import classes from "./ImageList.module.css";
import { getAppContents, getContentThumbnail } from "../../service/service";
import generateId from "../../helpers/idGenerator.helper";

function ImageList() {
  const [contentThumbnail, setContentThumbnail] = useState("");
  const [appContents, setAppContents] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        console.log("Yaho", res);
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
      <div className={classes.ContentThumbnailImageList}>
        {loading ? <p>loading ...</p> : null}
        {error && <p>ERROR ...</p>}
        {contentThumbnail
          ? contentThumbnail.map((e) => {
              return (
                <>
                  <div key={e.id} className={classes.imageBlock}>
                    <img
                      className={classes.ContentThumbnail}
                      src={e.url}
                      width="300"
                      height="160"
                    />
                    {appContents
                      ? appContents.map((el, i) => {
                          return (
                            <div key={i}>
                              {" "}
                              {el.contentInf
                                ? el.contentInf.map((elem) => {
                                    return (
                                      <div key={elem.id} className={classes.textName}>
                                        <p>{elem.name}</p>
                                      </div>
                                    );
                                  })
                                : null}
                            </div>
                          );
                        })
                      : null}
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
}

export default ImageList;
