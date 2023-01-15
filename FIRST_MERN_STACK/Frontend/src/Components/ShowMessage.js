import React, { Fragment, useCallback, useEffect, useState } from "react";

import * as showMessage from "./ShowMessage.module.css";

const ShowMessage = (props) => {
  const [secretData, setsecretData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dataFetchingHandler = useCallback(async () => {
    try {
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
  }, []);
  useEffect(() => {
    dataFetchingHandler();
  }, [dataFetchingHandler]);

  const error = (
    <div className={showMessage["error-message"]}>
      <h2>{errorMsg}</h2>
    </div>
  );
  return (
    <Fragment>
      {!secretData && error}
      {secretData && (
        <div class={showMessage.card}>
          <div
            class={showMessage["card-header"]}
          >{`Secret Code: ${secretData.code}`}</div>
          <div class={showMessage["card-content"]}>
            <p>{secretData.message}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ShowMessage;
