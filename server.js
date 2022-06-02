const express = require('express');
const app = express();

//Routes
app.get('/', helloWorld);
app.get('/about', about);

//Controllers
function helloWorld(req, res) {
    res.send('Hello World')
}

function about(req, res) {
    res.send('About Me')
}

app.listen(3000);