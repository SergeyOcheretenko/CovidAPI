const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json(req.query);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
