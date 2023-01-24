const express = require("express");
const orderRouter = express.Router();
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../Controller/order.js");

orderRouter.get("/", getOrders);

// // to run this function you need to send a GET request with the path /users/someID
orderRouter.get("/:id", getOrder);

// // to run this function you need to send a POST request with the path /users
orderRouter.post("/", createOrder);

orderRouter.put("/:id", updateOrder);

orderRouter.delete("/:id", deleteOrder);

module.exports = {
  orderRouter,
};
