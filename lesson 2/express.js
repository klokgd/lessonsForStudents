const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function (request, response) {
    response.status(200).send("<h2>Привет Express!</h2>");
});
app.get("/office", function (request, response) {
    const dirpath = path.join(__dirname, '/index.html')
    response.sendFile(dirpath);
});
app.post("/user", function (request, response) {
    console.log(request.body)
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);