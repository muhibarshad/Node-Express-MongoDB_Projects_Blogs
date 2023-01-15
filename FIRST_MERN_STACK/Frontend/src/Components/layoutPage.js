import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import AddMessage from "./AddMessage";
import Message from "./Message";
import * as layoutStyle from "./layoutPage.module.css";

const Layout = (props) => {
  const [isShowForm, setShowForm] = useState(false);
  const [isShowMessage, setShowMessage] = useState(false);
  const addMessageHandler = () => {
    setShowMessage(() => false);

    setShowForm((isShowForm) => !isShowForm);
  };
  const showMessageHandler = () => {
    setShowForm(() => false);
    setShowMessage((isShowMessage) => !isShowMessage);
  };
  return (
    <Fragment>
      <div className={layoutStyle.container}>
        <h1 className={layoutStyle["text-center"]}>SHHH! Yahan Ana mana hai</h1>
        <div className={layoutStyle["button-group"]}>
          <Button label={"Add Secret Message"} onClick={addMessageHandler} />
          <Button label={"Find Secret Message"} onClick={showMessageHandler} />
        </div>
      </div>
      {isShowForm && <AddMessage />}
      {isShowMessage && <Message />}
    </Fragment>
  );
};

export default Layout;
