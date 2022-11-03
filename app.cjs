const express = require('express');
const app = express();
const path = require('path');

const hostname = 'localhost';
const port = 8080;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})