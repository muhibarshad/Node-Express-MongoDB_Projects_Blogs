# Server.js File

The server.js file is the starting point of a backend application built using the MERN stack. It is the entry point of the application and it is responsible for setting up the server and handling incoming requests.

The server.js file typically contains the following elements:

- **Importing dependencies:** The first step is to import the necessary modules and packages that are required to set up the server. This includes modules like express, mongoose, dotenv, cors, etc.

- **Setting up the server:** The next step is to set up the server using Express. This involves creating an instance of the Express application, setting up middleware, and handling routes.

- **Connecting to the database:** The next step is to connect to the database using Mongoose. This involves creating a connection to the MongoDB database and handling any errors that may occur during the connection process.

- Setting up routes: Once the server and database are set up, the next step is to set up routes. Routes are the endpoints that handle incoming requests and return responses.

- **Starting the server:** The last step is to start the server by calling the listen method on the Express application. This makes the server listen on a specific port and handle incoming requests.

- **Error Handling:** It is important to handle errors that may occur during the execution of the application, to avoid unexpected behaviours and improve the user experience.

Here is an example of a simple server.js file that sets up a basic Express server and connects to a MongoDB database:

Here is a step-by-step explanation of the code

```js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
```

2. Then it loads the environment variables from the .env file by calling dotenv.config():

```js
dotenv.config();
```

3. Then it creates an instance of an express app:

```js
const app = express();
```

4. It enables cors, which allows any origin to access the API:

```js
app.use(cors());
```

5. It enable express.json middleware to parse incoming requests with JSON payloads:

```js
app.use(express.json());
```

6. It sets the MongoDB Atlas URI, which is used to connect to the MongoDB cluster:

```js
const uri = process.env.ATLAS_URI;
```

7. It connects to the MongoDB cluster using the Mongoose library and the URI:

```js
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
```

8. It creates a connection variable to the MongoDB cluster:

```js
const connection = mongoose.connection;
```

9. It listens for a 'open' event on the connection, which will be emitted when the connection to the MongoDB cluster is established:

```js
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
```

10. It sets the port to run the Express.js server on. It will look for the 'port' environment variable, and if it doesn't exist, it will default to 5000:

```js
const port = process.env.port || 5000;
```

11. It starts the Express.js server and listens on the specified port:

```js
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
```

```js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
```

# Why do we use the dotenv ?

dotenv is a library that allows you to load environment variables from a .env file in your project. This can be useful in situations where you want to store sensitive information, such as API keys, in a separate file that is not committed to version control. By using dotenv, you can easily switch between different environment configurations (e.g. development and production) without having to manually update the environment variables in your code. Additionally, it can make it easier to share configuration across different developers or systems.
