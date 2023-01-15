import React, { Fragment, useRef, useState } from "react";
import Model from "../UI/Model";

import * as addMessageStyle from "./AddMessage.module.css";

const AddMessage = (props) => {
  const [isModel, setModel] = useState(false);
  const [error, setError] = useState("");
  const message = useRef("");
  const code = useRef("");
  const validationForm = (e) => {
    e.preventDefault();
    const data = {
      message: message.current.value,
      code: code.current.value,
    };
    if (data.message.trim() === "" && data.code.trim() !== "") {
      setError("Message Filed is Empty");
      setModel(() => true);
    } else if (data.message.trim() !== "" && data.code.trim() === "") {
      setError("Secret Code Field is Empty !");
      setModel(() => true);
    } else if (data.message.trim() === "" && data.code.trim() === "") {
      setError("Both Fields are Empty !");
      setModel(() => true);
    } else if (
      data.message.trim() !== "" &&
      data.code.trim() !== "" &&
      data.code.length < 5
    ) {
      setError("Code must contain at least 5 characters!");
      setModel(() => true);
    }
  };
  const hideModelHanler = () => {
    setModel(() => false);
  };
  return (
    <Fragment>
      {isModel && <Model hide={hideModelHanler} errorMsg={error} />}
      <div className={addMessageStyle["form-container"]}>
        <form>
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="30"
            ref={message}
          />
          <br />
          <label for="secret-code">Set Secret Code:</label>
          <input type="password" ref={code} />
          <br />
          <button
            className={addMessageStyle.btn}
            type="submit"
            class="btn"
            onClick={validationForm}
          >
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddMessage;
