const express = require('express');
const router = express.Router();
const {getAllCustomers} = require('../model/users');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const customers = await getAllCustomers();
  console.log('customers >>>', customers)

  const customersList = customers.map(({id, firstName, lastName}) => 
    `${id}. <a href="http://127.0.0.1:3000/customers/${id}"> ${firstName} ${lastName}</a><br>`).join('');
    
  res.send(customersList);
  
}); 

module.exports = router;

