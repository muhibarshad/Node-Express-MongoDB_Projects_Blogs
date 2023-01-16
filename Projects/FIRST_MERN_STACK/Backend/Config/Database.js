import mongoose from "mongoose";

const Database = async () => {
  const url = "mongodb://localhost/messages";
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
  const connect = mongoose.connection;
  connect.on("open", () => {
    console.log("Database Connect Successfully");
  });
};

export default Database;
