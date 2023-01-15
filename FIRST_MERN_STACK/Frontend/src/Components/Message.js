import React, { Fragment, useState, useRef } from "react";
import * as seeMessage from "./Message.module.css";
import ShowMessage from "./ShowMessage";
import Model from "../UI/Model";
const Message = (props) => {
  const [isModel, setModel] = useState(false);

  const [isShowMessage, setShowMessage] = useState(false);
  const [error, setError] = useState("");
  const code = useRef("");
  const hideModelHanler = () => {
    setModel(() => false);
  };
  const messageHandler = (e) => {
    e.preventDefault();
    const data = code.current.value;
    if (data.trim() === "") {
      setError("Secret Code Field is Empty !");
      setModel(() => true);
    } else if (data.trim() !== "" && data.length < 5) {
      setError("Code must contain at least 5 characters!");
      setModel(() => true);
    } else {
      setShowMessage(() => true);
    }
  };
  return (
    <Fragment>
      {isModel && <Model hide={hideModelHanler} errorMsg={error} />}
      {!isModel && !isShowMessage && (
        <div className={seeMessage["form-container"]}>
          <form>
            <label for="secret-code">Enter Secret Code:</label>
            <input type="password" ref={code} />
            <br />
            <button
              className={seeMessage.btn}
              type="submit"
              class="btn"
              onClick={messageHandler}
            >
              submit
            </button>
          </form>
        </div>
      )}
      {isShowMessage && <ShowMessage />}
    </Fragment>
  );
};

export default Message;
