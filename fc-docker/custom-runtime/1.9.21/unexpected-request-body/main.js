const express = require("express");
const {json, raw} = require("express");
const fs = require("fs");

let app = express();

// app.use(raw());
app.use(json());

app.post('/invoke', async (req, res) => {
    let body = JSON.stringify(req.body);

    let expected = fs.readFileSync('./request-body.json').toString();
    if (expected !== body) {
        console.warn(`expected body ${expected}`);
        console.warn(`actually body ${body}`);
    }

    res.sendStatus(200);
});

app.listen(9000, () => {
    console.log('Application started at port 9000');
})
