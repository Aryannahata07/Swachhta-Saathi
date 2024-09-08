// npm init -y
// npm install express body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let userData = {};

app.post('/update', (req, res) => {
    const { user, day, checked } = req.body;
    if (!userData[user]) {
        userData[user] = {};
    }
    userData[user][day] = checked;
    res.sendStatus(200);
});

app.get('/data', (req, res) => {
    res.json(userData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
