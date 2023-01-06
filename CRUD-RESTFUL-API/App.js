import mongoose from "mongoose";
import express from "express";

const App = express();

//Connection to localhost server
App.listen(3000, () => {
  console.log("PORT connect Successfully");
});

//Connection to userRouter
App.use(express.json())
import userRouter from "./Routers/Users.js";
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
