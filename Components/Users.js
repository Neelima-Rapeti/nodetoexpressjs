const express = require("express");
const userRouter = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controller/user.js");

userRouter.get("/", getUsers);

// to run this function you need to send a GET request with the path /users/someID
userRouter.get("/:id", getUser);

// // to run this function you need to send a POST request with the path /users
userRouter.post("/", createUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = {
  userRouter,
};
