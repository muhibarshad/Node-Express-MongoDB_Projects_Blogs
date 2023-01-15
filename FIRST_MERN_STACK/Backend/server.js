import express from "express";
import bodyParser from "body-parser";
import Database from "./Config/Database.js";
import messages from "./Routers/messages.js";
const PORT = 9000;
const App = express();
Database();

App.listen(PORT, () => {
  console.log("Server Start Running");
});

App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
App.use("/messages", messages)