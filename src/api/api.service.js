'use strict';

const axios = require('axios');

class ApiService {
    async getAllStat() {
        try {
            const { data } = await axios.get('https://api.covidtracking.com/v1/us/current.json');
            return data;
        } catch (err) {
            return null;
        }
    }

    async getStatByState(state) {
        try {
            const { data } = await axios.get(`https://api.covidtracking.com/v1/states/${state}/current.json`);
            return data;
        } catch (err) {
            return null;
        }
    }
}

module.exports = new ApiService();