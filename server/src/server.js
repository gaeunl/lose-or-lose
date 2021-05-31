var express = require('express');
var app = express();
var PORT = 8000;

app.use(express.json());

app.get('/hello', (req, res) => res.send("Hello"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));