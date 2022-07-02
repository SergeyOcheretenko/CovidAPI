'use strict';

const { Schema, model } = require('mongoose');

const Response = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = model('Response', Response);