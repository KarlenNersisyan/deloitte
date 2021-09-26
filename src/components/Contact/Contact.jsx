import React from "react";
import { useState } from "react";
import cn from "classnames";

import classes from "./Contact.module.css";

export default function Contact() {
  const [close, setClose] = useState(true);
  const handleCloseClick = () => {
    setClose(!close);
  };

  return (
    <div className={cn([classes.backContainer], { [classes.hide]: !close })}>
      <div className={classes.formContainer}>
        <div className={classes.header}>
          <div>
            <span className={classes.headerElement}> + </span>
            <span className={classes.headerElement}> - </span>
          </div>
          <h3> Contact Information </h3>
          <button onClick={handleCloseClick} className={classes.headerElement3}>
            X
          </button>
        </div>
        <form action="/#">
          <div className={classes.former}>
            <input type="text" placeholder="First Name *" autoFocus />
            <input type="text" placeholder="Last Name *" />
            <input type="text" placeholder="Company *" />
            <input type="text" placeholder="Job Title *" />
          </div>
          <div>
            <input type="email" required placeholder="Email *" />
          </div>
          <div className={classes.info}>
            <h5>
              I agree to receive emailed reports,articles,and event
              invitations.I understand I may unsubscribe at any time bye
              clicking the link included in emails *.
            </h5>
            <div>
              <input type="radio" name="info" id="yes" value="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input type="radio" name="info" id="no" value="no" />
              <label htmlFor="no">No</label>
            </div>
            <div className={classes.policy}>
              <input type="checkbox" name="yah" id="hay" value="bye" />
              <label htmlFor="yah" className={classes.labEl}>
                The submission of personal information through this page is
                subject to Deloitte's <a href="#!">Privacy Statement </a> and{" "}
                <a href="#!">Legal Terms</a>*
              </label>
            </div>
          </div>
          <div className={classes.footer}>
            <div className={classes.event}>
              <button type="submit" className={classes.btnIcon1}>
                RESET
              </button>
            </div>
            <div>
              <button type="submit" className={classes.btnIcon2}>
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
