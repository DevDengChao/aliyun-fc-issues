const express = require("express");

let app = express();

app.post('/invoke', (req, res) => {
    res.sendStatus(200);
    // container failed to exit after this
});

app.listen(9000, () => {
    console.log('Application started at port 9000');
})
