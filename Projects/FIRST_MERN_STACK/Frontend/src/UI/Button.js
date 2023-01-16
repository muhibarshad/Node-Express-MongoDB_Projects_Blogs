import React, { Fragment } from "react";
import * as buttonStyle from "./Button.module.css";

const Button = (props) => {
  const funcHandler = () => {
    props.onClick();
  };
  return (
    <Fragment>
      <button className={buttonStyle.btn} onClick={funcHandler}>
        {props.label}
      </button>
    </Fragment>
  );
};

export default Button;
