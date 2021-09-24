import { useEffect, useState } from "react";
import classes from "./List.module.css";
import { getAppContents } from "../../service/service";
import generateId from "../../helpers/idGenerator.helper";
import ImageList from "../ImageList/ImageList";

function List() {
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

  //   console.log("Ushadir", appContents && appContents[0].contentInf);

  return (
    <div className={classes.list}>
      {/* <h2>{appContents && appContents[0].catName}</h2> */}

      {loading ? <p>loading ...</p> : null}
      {error && <p>ERROR ...</p>}
      {appContents
        ? appContents.map((e, i) => {
            return (
              <>
                <div className={classes.nameCompany}>
                  <h2 key={generateId}>{e.catName}</h2>
                </div>
                <div className={classes.descriptionCompany}>
                  <p key={generateId}>{e.description}</p>
                </div>
                <ImageList />
              </>
            );
          })
        : null}
    </div>
  );
}

export default List;
