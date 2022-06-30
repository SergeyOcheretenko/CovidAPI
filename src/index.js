'use strict';

const express = require('express');
const router = require('./router');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/covid', router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
