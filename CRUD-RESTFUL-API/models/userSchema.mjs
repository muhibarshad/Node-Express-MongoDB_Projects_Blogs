import mongoose from "mongoose";

//SCHEME FOR A DOCOMENT OF USERS COLLECTION
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  premium: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default mongoose.model("userSchema", userSchema);
