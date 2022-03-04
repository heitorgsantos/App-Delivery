const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/users/createUserController');
const loginUserController = require('../controllers/users/loginUserController');
const findAllController = require('../controllers/users/findUserController');
const createSalesController = require('../controllers/sales/createSalesController');
const findSalesByClientId = require('../controllers/sales/findSalesByClientId ');

router.post('/register', createUserController);
router.post('/login', loginUserController);

router.get('/login', findAllController);
router.get('/register', findAllController);
// router.update('/');
// router.delete('/');

router.post('/customer/checkout', createSalesController);

router.get('/client/order/:id', findSalesByClientId)

module.exports = {
  router,
};
