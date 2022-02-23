const express = require('express');
const router = express.Router();
const { createUserController, loginUserController } = require('../controllers/users');

router.post('/register', createUserController);
router.post('/login', loginUserController);
// router.get('/');
// router.update('/');
// router.delete('/');

module.exports = {
  router,
};