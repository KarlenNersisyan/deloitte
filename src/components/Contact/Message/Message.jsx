import React from "react";
import cn from "classnames";

import classes from "./Message.module.css";
import {
  facebookIcon,
  gitHubIcon,
  instagramIcon,
  linkedinIcon,
  smileIcon,
  telegramIcon,
  twitterIcon,
  youtubeIcon,
} from "../../../constants/utils.constant";

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
        <i className={smileIcon}></i>
      </div>

      <div className={classes.info}>
        <h3>Contacts:</h3>
      </div>

      <div className={classes.contacts}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/KarlenNersisyan"
        >
          <i className={gitHubIcon}></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/karlen-nersisyan/"
        >
          <i className={linkedinIcon}></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/nersisyan_karl"
        >
          <i className={twitterIcon}></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/karlen.nersisyan.1999"
        >
          <i className={facebookIcon}></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/nersisyankarlen/"
        >
          <i className={instagramIcon}></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/NKarlen">
          <i className={telegramIcon}></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCfSN1lfHcKgrnkROAkJBJwQ"
        >
          <i className={youtubeIcon}></i>
        </a>
      </div>
    </div>
  );
}
