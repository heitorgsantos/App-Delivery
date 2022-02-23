const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/users/createUserController');
const loginUserController = require('../controllers/users/loginUserController');

router.post('/register', createUserController);
router.post('/login', loginUserController);

// Criando rota p/ ver o retorno;
router.get('/register');
// router.update('/');
// router.delete('/');

module.exports = {
  router,
};