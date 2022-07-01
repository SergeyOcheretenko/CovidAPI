'use strict';

const Request = require('../models/Request');
const Response = require('../models/Response');
const bcrypt = require('bcryptjs');
const config = require('../../CONFIG.json');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

function generateAccessToken(id) {
    return jwt.sign(id, config.JWT_SECRET, { expiresIn: '24h' });
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Registration error' });
            }
            const { email, password } = req.body;
            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: 'User with this name already exists' });
            }
            const hashPassword = bcrypt.hashSync(password, config.SALT);
            const user = new User({ username, password: hashPassword });
            await user.save();
            return res.json({ message: 'User is successfully registered' });
        } catch (err) {
            res.status(400).json({ message: 'Login error' });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Password is incorrect' });
            }
            const token = generateAccessToken(user._id);
            return res.json({ token });
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: 'Registration error' });
        }
    }
}

module.exports = new AuthController();