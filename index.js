const express = require('express')
const PORT = process.env.PORT || 3030;
var app = express();

var main = require('./main');

app.use('/', main);

app.listen(PORT, () => {
    console.log(`Server Run on port ${PORT}`)
});
