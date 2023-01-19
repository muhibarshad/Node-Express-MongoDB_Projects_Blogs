# Essential Pacakages

```sh

npm init -y
npm i express mongoose cors dotenv nodemon --save-dev

```

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Fisrt Full Satck backend",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "nodemon server.js"
  },
  "author": "muhib7353",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongodb": "^4.13.0",
    "mongoose": "^6.8.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

Here are some essential packages you'll need to install during the development of a web application using the MERN stack:

- **express**: This is the web framework that is used to build the server-side of the application.

- **mongoose**: This package is an Object-Document Mapping (ODM) library for MongoDB and Node.js. It allows you to interact with your MongoDB database using a more intuitive, schema-based approach.

- **cors**: This package is used to enable Cross-Origin Resource Sharing (CORS), which allows your server to accept requests from different origins.

- **dotenv**: This package is used to load environment variables from a .env file. This is useful for storing sensitive information like API keys, passwords, and other secrets that you don't want to hard-code into your application.

- **nodemon**: This package is a utility that will monitor for any changes in your source and automatically restart your server. It is only for development.

These are some of the essential packages you'll need to get started, but depending on the complexity of your application, you may need to install additional packages.
