const express = require('express');
const { router } = require('../database/routers/routes');
const { routerCustomer } = require('../database/routers/routerCustomer');
const defaultError = require('../database/utils/defaultError');

const app = express();
app.use(express.json());

app.use('/', router);
app.use('/', routerCustomer);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(defaultError);

module.exports = app;
