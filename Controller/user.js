
const { pool } = require("../db");
// console.log(pool);
const getUsers = async (req, res) => {
    try {
      const users = await pool.query("SELECT * FROM users;");
      res.json(users.rows);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };

  const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const users = await pool.query(`SELECT * FROM users where id=$1;`, [id]);
      res.json(users.rows[0]);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };


  const createUser = async (req, res) => {
    try {
      const { firstName, lastName, age } = req.body;
      console.log(firstName);
  
      const user = await pool.query(
        `INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *;`,
        [firstName, lastName, age]
      );
  
      res.json(user.rows[0]);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };

  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, age } = req.body;
  
      const user = await pool.query(
        `UPDATE users SET first_name=$1, last_name=$2, age=$3 WHERE id=$4 RETURNING *;`,
        [firstName, lastName, age, id]
      );
  
      res.json(user.rows[0]);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };
  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query(`DELETE FROM users where id=$1;`, [id]);
      res.json(result);
    } catch (err) {
      res.status(500).send("something went wrong");
    }
  };

  module.exports = {
    getUsers,getUser,createUser,updateUser,deleteUser
    
  };

  
  
  
