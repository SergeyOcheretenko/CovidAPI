'use strict';

const { Router } = require('express');
const Controller = require('./Controller');

const router = new Router();

router.get('/us', Controller.getAllData);
router.get('/states/:state', Controller.getDataByState);

module.exports = router;