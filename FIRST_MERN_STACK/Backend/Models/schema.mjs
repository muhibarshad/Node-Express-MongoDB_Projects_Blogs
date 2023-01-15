import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});
const Message = mongoose.model("Message", messagesSchema);
export default Message;
