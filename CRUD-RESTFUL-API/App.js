import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import userRouter from "./Routers/Users.js";
const App = express();
const PORT = 9000;


//Connection to localhost server
App.listen(PORT, () => {
  console.log("PORT connect Successfully");
});


// Connection to userRouter
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
App.use("/users", userRouter);


//Connection to Database
const url = "mongodb://localhost/Users";
mongoose.connect(url, {
  useNewUrlParser: true,
});
const con = mongoose.connection;
con.on("open", () => {
  console.log("Conected Successfully");
});
