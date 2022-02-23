const express = require('express');
const { getProducts } = require('../controllers/customer/loginCustomer');
const routerCustomer = express.Router();

routerCustomer.get('/customer/products', getProducts);
// router.get('/');
// router.update('/');
// router.delete('/');

module.exports = {
  routerCustomer,
};