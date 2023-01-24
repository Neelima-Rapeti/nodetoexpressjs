const { pool } = require("../db");
// console.log(pool);
const getOrders = async (req, res) => {
    try {
      const users = await pool.query("SELECT * FROM orders;");
      res.json(users.rows);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };

  const getOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const users = await pool.query(`SELECT * FROM orders where id=$1;`, [id]);
      res.json(users.rows[0]);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };


  const createOrder = async (req, res) => {
    try {
      const { price, date, userId } = req.body;
      console.log(price);
  
      const user = await pool.query(
        `INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3) RETURNING *;`,
        [price, date, userId]
      );
  
      res.json(user.rows[0]);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };

  const updateOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const { price, date, userId} = req.body;
  
      const order = await pool.query(
        `UPDATE orders SET price=$1, date=$2 , user_id=$3 WHERE id=$4 RETURNING *;`,
        [price, date, userId, id ]
      );
  
      res.json(order.rows[0]);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };

  const deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query(`DELETE FROM orders where id=$1;`, [id]);
      res.json(result);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };

  module.exports = {
   
    getOrders,getOrder,createOrder,updateOrder,deleteOrder
    
  };
