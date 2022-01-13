const express = require('express');

const app = express(),
    port = 3000,
    path = require('path');

app.use(express.static(path.join(__dirname,'dist')));

app.listen(port, () => {
    console.log('server started on localhost ' + port)
});