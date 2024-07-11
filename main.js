const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/funfact', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.send({
            "fact": response.data.value
        });
    } catch (error) {
        res.status(500).send({
            "error": "Failed to fetch fun fact"
        });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
