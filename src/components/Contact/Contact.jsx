import React from "react";
import cn from "classnames";
import { useState } from "react";

import Message from "./Message/Message";

import classes from "./Contact.module.css";
import {
  formTypes,
  formTypesEmail,
  plComp,
  plJob,
  plName,
  plSurName,
  plEmail,
  btn1,
  btn2,
  btn,
} from "../../constants/utils.constant";

export default function Contact({ isEmail, handleEmailClick }) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(false);

  const handleMessage = () => {
    setMessage(!message);
  };

  const validateEmail = (email) => {
    const res =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  };

  const handleEmailValid = () => {
    if (validateEmail(value)) {
      return handleMessage();
    }
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={classes.former}>
            <input type={formTypes} placeholder={plName} autoFocus />
            <input type={formTypes} placeholder={plSurName} />
            <input type={formTypes} placeholder={plComp} />
            <input type={formTypes} placeholder={plJob} />
          </div>
          <div>
            <input
              id="email"
              name="email"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              type={formTypesEmail}
              required
              placeholder={plEmail}
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
              <button type={btn} className={classes.btnIcon1}>
                {btn1}
              </button>
            </div>
            <div>
              <button
                onClick={handleEmailValid}
                type={btn}
                className={classes.btnIcon2}
              >
                {btn2}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Message message={message} handleMessage={handleMessage} />
    </div>
  );
}
