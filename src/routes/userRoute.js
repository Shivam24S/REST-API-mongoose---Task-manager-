const express = require("express");
const router = express.Router();
const User = require("../model/users.js");

// Creation of end points
router.post("/users", async (req, res) => {
  const userData = new User(req.body);

  try {
    await userData.save();
    res.status(201).send("User created successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Getting all data
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).send(users);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// Getting individual user data
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

// Updating user data
router.patch("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(400).send("Unable to update user");
  }
});

// Deleting user data
router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    return res.status(200).send("User deleted successfully");
  } catch (error) {
    return res.status(400).send("Unable to delete user");
  }
});

module.exports = router;
