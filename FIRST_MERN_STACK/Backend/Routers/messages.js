import express from "express";
import Message from "../Models/schema.mjs";

const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const data = await Message.find();
//     res.json(data);
//   } catch (error) {
//     res.send(`Error : {error}`);
//   }
// });

router.get("/:code", async (req, res) => {
  try {
    const specificMessage = await Message.findOne({ code: req.params.code });
    res.json(specificMessage);
  } catch (error) {
    res.send(`Error ${error}`);
  }
});
router.post("/", async (req, res) => {
  try {
    const newMessage = new Message({
      message: req.body.message,
      code: req.body.code,
    });
    const savedData = await newMessage.save();
    res.json(savedData);
  } catch (error) {
    res.send(`Error : {error}`);
  }
});
export default router;
