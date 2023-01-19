# CRUD operations Routers method

## External Dependenciceies you want

```js
import express from "express";
import userSchema from "../models/userSchema.mjs";
const router = express.Router();
```

## For Fetch All data from the database :`GET Method`

```js
//READ ALL USERS
router.get("/", async (_, res) => {
  try {
    const users = await userSchema.find();
    res.json(users);
  } catch (err) {
    res.send(`Error ${err}`);
  }
});
```

This route handles a GET request to the root path of the users route. It uses the userSchema.find() method to retrieve all the users from the database and then sends the data as a JSON response using the res.json() method.

## For specific data from the database :`GET Method:/id or searchedQuerry`

```js
//READ SPECIFIC USER WITHIN ID
router.get("/:id", async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    // const specificMessage = await Message.findOne({ code: req.params.code });//can be used to find only one such like with that attribute of the object
    res.json(user);
  } catch (err) {
    res.send(`Error ${err}`);
  }
});
```

This route handles a GET request to a specific user by id. It uses the userSchema.findById() method to retrieve a user with a specific id from the database, the id is passed as a parameter in the url. Then it sends the data as a JSON response using the res.json() method.

## Insert the new data into the database :`POST method`

```js
//CREATE A NEW USER
router.post("/", async (req, res) => {
  const user = new userSchema({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const storedUserData = await user.save();
    res.json(storedUserData);
  } catch (err) {
    res.send(`Error : ${err}`);
  }
});
```

This route handles a POST request to the root path of the users route. It creates a new user object using the userSchema and the data sent in the request body. Then it saves the new user object in the database using the user.save() method and sends the stored user data as a JSON response using the res.json() method

## Update the specific data from the database :`PUT method`

```js
//UPDATE THE EXISTING SPECIFIC USER
router.patch("/:id", async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    user.premium = req.body.premium;
    const updatedUserData = await user.save();
    res.json(updatedUserData);
  } catch (err) {
    res.send(`Error ${err}`);
  }
});
```

The first route handler is for updating a specific user. It uses the PATCH method and is defined for the /:id path. When a PATCH request is made to this path, the route handler is executed. It first uses the userSchema.findById() method to find the user with the specified ID passed in the URL. Then it updates the value of the premium property of the user with the value passed in the request body. Finally, it uses the user.save() method to save the updated user in the database and sends the updated data as a JSON response to the client.

## Delete the specific data from the database :`DELETE method `

```js
//DELETE THE EXISTING SPECIFIC USER
router.delete("/:id", async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    const updatedUserData = await user.remove();
    res.json(updatedUserData);
  } catch (err) {
    res.send(`Error ${err}`);
  }
});
```

The second route handler is for deleting a specific user. It uses the DELETE method and is also defined for the /:id path. When a DELETE request is made to this path, the route handler is executed. It first uses the userSchema.findById() method to find the user with the specified ID passed in the URL. Then it uses the user.remove() method to remove the user from the database and sends the removed data as a JSON response to the client.
