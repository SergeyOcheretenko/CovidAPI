'use strict';

const { Schema, model } = require('mongoose');

const Request = new Schema({
    email: { type: String, unique: true, required: true },
    date: { type: Date, required: true },
    password: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = model('Request', Request);