import React from "react";
import cn from "classnames";

import classes from "./Message.module.css";

export default function Message({ message, handleMessage }) {
  return (
    <div
      className={cn([classes.formContainerMessage], {
        [classes.hide]: !message,
      })}
    >
      <div className={classes.header}>
        <div>
          <span className={classes.headerElement}> + </span>
          <span className={classes.headerElement}> - </span>
        </div>
        <h2> Message Information </h2>
        <button onClick={handleMessage} className={classes.headerElement3}>
          X
        </button>
      </div>

      <div className={classes.info}>
        <h3>
          Your information has been successfully corrected. Our co-workers meet
          with you in the near future.
        </h3>

        <h3>Thank you for using our services.</h3>
      </div>

      <div className={classes.favicon}>
        <i className="fal fa-smile-wink"></i>
      </div>

      <div className={classes.info}>
        <h3>Contacts:</h3>
      </div>

      <div className={classes.contacts}>
        <a target="_blank" rel="noreferrer" href="https://github.com/KarlenNersisyan">
          <i className="fab fa-github"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karlen-nersisyan/">
          <i className="fab fa-linkedin"></i>
        </a>

        <a target="_blank" rel="noreferrer" href="https://twitter.com/nersisyan_karl">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          target="_blank" rel="noreferrer"
          href="https://www.facebook.com/karlen.nersisyan.1999"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/nersisyankarlen/">
          <i className="fab fa-instagram"></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/NKarlen">
          <i className="fab fa-telegram"></i>
        </a>
        <a
          target="_blank" rel="noreferrer"
          href="https://www.youtube.com/channel/UCfSN1lfHcKgrnkROAkJBJwQ"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
}
