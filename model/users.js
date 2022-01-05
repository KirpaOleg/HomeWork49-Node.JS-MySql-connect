const config = require('../config/newdb');
const mysql = require('mysql2/promise');

const getAllCustomers = async () => {
  try {
    const connection = await mysql.createConnection(config);
    console.log('CONNECT SELECT >>>');
    const query = `SELECT * FROM CUSTOMERS`;
    const [row, fields] = await connection.execute(query);
    connection.end();
    return row;
  } catch (err) {
    console.log(err);
    connection.end();
  } 
}

const creteNewProduct = async (order) => {
  const {product, customer} = order;
  try {
    const connection = await mysql.createConnection(config);
    console.log('CONNECT INSERT >>>');
    const query = `
    INSERT orders(customer_id, product)
    VALUES ('${customer}', '${product}')`;
    const [rows, fields] = await connection.execute(query);  
    connection.end();
    return rows;
  } catch (err) {
    console.log(err);
    connection.end();
  }
}

module.exports = {
  getAllCustomers: getAllCustomers,
  creteNewProduct: creteNewProduct, 
}