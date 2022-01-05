const express = require('express');
const router = express.Router();
const {getQuery} = require('../model/users');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const orders = await getQuery();
  console.log('orders >>>', orders)

  const ordersList = orders.map(({id, firstName, lastName, product}) => 
    `${id}. ${firstName} ${lastName} - ${product}<br>`).join('');
    
  res.send(ordersList);
  
}); 

module.exports = router;

