'use strict';

const express = require('express');
const apiRouter = require('./api/api.router');
const authRouter = require('./auth/auth.router');
const authMiddleware = require('./middlewares/auth.middleware');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/auth', authMiddleware, authRouter);
app.use('/covid', apiRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
