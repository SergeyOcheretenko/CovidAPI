'use strict';

const Router = require('express');
const AuthController = require('./auth.controller');
const { check } = require('express-validator');

const authRouter = new Router();

authRouter.post('/registration', [
    check('username', 'Name cannot be empty').notEmpty(),
    check('password', 'Password must not be shorter than 4 characters').isLength({ min: 4 })
], AuthController.registration);
authRouter.post('/login', AuthController.login);

module.exports = authRouter;