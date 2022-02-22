const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/users/createUserController');

router.post('/login', createUserController);
// router.get('/');
// router.update('/');
// router.delete('/');

module.exports = {
  router,
};