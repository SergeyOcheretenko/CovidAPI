'use strict';

const ApiService = require('./api.service');

class Controller {
    async getAllData(req, res) {
        const data = await ApiService.getAllStat();
        if (!data) {
            return res.status(500).json('Failed to execute request');
        }
        return res.json(data);
    }

    async getDataByState(req, res) {
        const state = req.params.state;
        const data = await ApiService.getStatByState(state);
        if (!data) {
            return res.status(404).json('Wrong U.S. state indicated');
        }
        return res.json(data);
    }
}

module.exports = new Controller();