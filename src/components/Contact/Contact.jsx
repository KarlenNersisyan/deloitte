import React from "react";
import cn from "classnames";

import classes from "./Contact.module.css";
import Message from "./Message/Message";
import { useState } from "react";

export default function Contact({ isEmail, handleEmailClick }) {
  const [message, setMessage] = useState(false);
  const [value, setValue] = useState("");

  const handleMessage = () => {
    setMessage(!message);
  };

  return (
    <div className={cn([classes.backContainer], { [classes.hide]: !isEmail })}>
      <div className={classes.formContainer}>
        <div className={classes.header}>
          <div>
            <span className={classes.headerElement}> + </span>
            <span className={classes.headerElement}> - </span>
          </div>
          <h3> Contact Information </h3>
          <button onClick={handleEmailClick} className={classes.headerElement3}>
            X
          </button>
        </div>
        <form action="/home">
          <div className={classes.former}>
            <input type="text" placeholder="First Name *" autoFocus />
            <input type="text" placeholder="Last Name *" />
            <input type="text" placeholder="Company *" />
            <input type="text" placeholder="Job Title *" />
          </div>
          <div>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="email"
              required
              placeholder="Email *"
              value={value}
            />
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
            <div onClick={value ? handleMessage : null}>
              <button type="submit" className={classes.btnIcon2}>
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
      <Message message={message} handleMessage={handleMessage} />
    </div>
  );
}
