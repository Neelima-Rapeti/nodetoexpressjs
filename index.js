const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { userRouter } = require("./Components/Users");
const { orderRouter } = require("./Components/Orders");

const app = express();

const PORT = process.env.port;

app.use(express.json());

app.use("/users", userRouter);
app.use("/orders", orderRouter);

// console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server is connected to port ${PORT} and is running!`);
});
