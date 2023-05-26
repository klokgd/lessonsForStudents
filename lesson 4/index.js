const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
// Регистрация с записью в файл с использованием POST запросов
const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();

// app.post('/', jsonParser, (req, res) => {
//     // const body = req.body
//     const { body } = req
//     try {
//         fs.writeFileSync('body.txt', JSON.stringify(body))
//     } catch (err) {
//         console.error(err)
//     }
// })

// app.get('/user', (req, res) => {
//     const { query } = req
//     res.send(`Username - ${query.username}; Email - ${query.email}`)
// })

app.use(function (request, response, next) {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n", function () { });
    next();
});
app.use(express.static(path.join(__dirname, "/public")));

const pathname = 'users.json'
let users = JSON.parse(fs.readFileSync(pathname, 'utf8'))

app.get('/users', (req, res) => {
    const { query } = req
    if (Object.keys(query) === 0) {
        const user = users.find(user => user.username.toLowerCase() == query.username.toLowerCase())
        if (!user) {
            res.send('Такого пользователя не найдено')
        }
        res.json(user)
    }
    res.sendFile(path.join(__dirname, 'user.html'))
})

app.delete('/users/:id', (req, res) => {
    const userId = req.params['id']
    const user = users.find(user => user.id == userId)
    if (!user) {
        res.send('Такого пользователя не найдено')
    }
    users = users.filter(user => user.id != userId)
    // if (!user) {
    //     res.send('Такого пользователя не найдено')
    // }
    fs.writeFileSync(pathname, JSON.stringify(users))
    res.send(`Пользователь с ID ${userId} успешно удалён`)
})


app.post('/users', urlencodedParser, (req, res) => {
    const newUser = req.body
    const emailRegex = /\S+@\S+\.\S+/;
    newUser.createAt = Date()
    if (!emailRegex.test(newUser.email)) {
        res.status(400).send('Введите верный email')
    }
    users.push(newUser)
    fs.writeFileSync(pathname, JSON.stringify(users))
    res.send(`Пользователь ${newUser.username} успешно добавлен`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use((req, res) => {
    res.status(404).send('Такого запроса не найден')
})

app.listen(3000)