# MongoDB DataBase Connection

```js
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
```

0. It connects to the MongoDB cluster using the Mongoose library and the URI:

```js
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
```

1. It creates a connection variable to the MongoDB cluster:

```js
const connection = mongoose.connection;
```

2- It listens for a 'open' event on the connection, which will be emitted when the connection to the MongoDB cluster is established:

```js
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
```
