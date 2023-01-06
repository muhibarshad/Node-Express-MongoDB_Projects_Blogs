
import mongoose from "mongoose";
import express from "express"
import userRouter from './Routers/Users.mjs'

const App = express();
const url = "mongodb://localhost/Users";

//Connection to server
App.listen(3000,()=>{
  console.log("PORT connect Successfully")
})

//Connection to userRouter
App.use('/users',userRouter);


//Connection to Database
mongoose.connect(url, {
  useNewUrlParser: true,
});
const con = mongoose.connection;
con.on("open", () => {
  console.log("Conected Successfully");
});





