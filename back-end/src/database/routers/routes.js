const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/users/createUserController');
const loginUserController = require('../controllers/users/loginUserController');
const findAllController = require('../controllers/users/findUserController');
const createSalesController = require('../controllers/sales/createSalesController');
const findSalesSellerById = require('../controllers/sales/findSalesSellerController');
const findSalesByClientId = require('../controllers/sales/findSalesByClientId ');
const updateStatusSales = require('../controllers/sales/updateStatusSalesController');

router.post('/register', createUserController);
router.post('/login', loginUserController);
router.post('/customer/checkout', createSalesController);

router.get('/login', findAllController);
router.get('/register', findAllController);
router.get('/seller/orders/:id', findSalesSellerById);
router.get('/customer/orders/:id', findSalesByClientId);

router.put('/seller/orders/:id', updateStatusSales);

module.exports = {
  router,
};
