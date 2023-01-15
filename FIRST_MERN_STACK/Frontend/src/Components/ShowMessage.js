import React, { Fragment, useCallback, useEffect, useState } from "react";

import * as showMessage from "./ShowMessage.module.css";

const ShowMessage = (props) => {
  const [secretData, setsecretData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dataFetchingHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:9000/messages/${props.value}`
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("Wrong Secret code! Try again");
      }
      setsecretData({
        message: data.message,
        code: data.code,
      });
    } catch (error) {
      setErrorMsg(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    dataFetchingHandler();
  }, [dataFetchingHandler]);

  let content = "";

  if (isLoading) {
    content = (
      <div class={showMessage["loading-spinner"]}>
        <div class={showMessage["rolling-spinner"]}></div>
      </div>
    );
  }
  if (errorMsg) {
    content = (
      <div className={showMessage["error-message"]}>
        <h2>{errorMsg}</h2>
      </div>
    );
  }
  if (secretData) {
    content = (
      <div class={showMessage.card}>
        <div
          class={showMessage["card-header"]}
        >{`Secret Code: ${secretData.code}`}</div>
        <div class={showMessage["card-content"]}>
          <p>{secretData.message}</p>
        </div>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default ShowMessage;
