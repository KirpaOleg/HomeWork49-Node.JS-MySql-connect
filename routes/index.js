const express = require('express');
const multer = require('multer');
const router = express.Router();
const {creteNewProduct} = require('../model/users');
const upload = multer();

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Express' });
});

router.get('/customers/:id', (req, res, next) => {
  const getId = req.params['id'];
  console.log('id >>>>', getId);
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), async(req, res) => {
  console.log(req.body.product);
  const result = await creteNewProduct(req.body);
  res.send(`hello ${req.body.customer}`);
});

module.exports = router;

