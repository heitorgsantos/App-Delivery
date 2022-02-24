const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/users/createUserController');
const loginUserController = require('../controllers/users/loginUserController');
const findAllController = require('../controllers/users/findUserController');

router.post('/register', createUserController);
router.post('/login', loginUserController);

router.get('/login', findAllController);
router.get('/register', findAllController);
// router.update('/');
// router.delete('/');

module.exports = {
  router,
};
