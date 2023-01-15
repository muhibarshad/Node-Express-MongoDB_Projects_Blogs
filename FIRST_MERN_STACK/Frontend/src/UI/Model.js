import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import * as modelStyle from "./Model.module.css";

const Model = (props) => {
  const hide = () => {
    props.hide();
  };
  return ReactDOM.createPortal(
    <Fragment>
      <div className={modelStyle["modal-backdrop"]} onClick={hide} />
      <div className={modelStyle["modal-window"]}>
        <div className={modelStyle["modal-header"]}>
          <h2>Error</h2>
        </div>
        <div className={modelStyle["modal-body"]}>
          <p>{props.errorMsg}</p>
        </div>
        <div className={modelStyle["modal-footer"]}>
          <button className={modelStyle["modal-close-button"]} onClick={hide}>
            Close
          </button>
        </div>
      </div>
    </Fragment>,
    document.getElementById("model")
  );
};

export default Model;
