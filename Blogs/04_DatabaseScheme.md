# Database Scheme in MongoDB

In MongoDB, a schema defines the structure of the documents within a collection. A schema defines the fields and their types, and can also include validation rules and other constraints. MongoDB does not enforce a strict schema, which means that documents within a collection can have a different set of fields and different types of values.

You can create a schema manually by defining an object that represents the structure of the documents in a collection. This is commonly used with a MongoDB Object Document Mapper (ODM) library such as Mongoose. Here's an example of a user schema defined with Mongoose:

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
```
