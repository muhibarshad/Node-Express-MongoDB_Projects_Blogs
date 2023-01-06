import express from "express";
import userSchema from "../models/userSchema.mjs";
const router = express.Router();

//READ ALL USERS
router.get("/", async (_, res) => {
  try {
    const users = await userSchema.find();
    res.json(users);
  } catch (err) {
    res.send(`Error ${err}`);
  }
});

//READ SPECIFIC USER WITHIN ID
router.get("/:id", async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send(`Error ${err}`);
  }
});

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

export default router;
