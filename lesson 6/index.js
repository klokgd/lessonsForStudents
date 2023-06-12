const express = require('express')
const fs = require('fs')
const multer = require('multer')
const { returnNewsHtmlBlock } = require('./public/helpers')
const path = require('path')
let http = require('http');
let { Server } = require('socket.io');

const app = express()
let server = http.createServer(app);
let io = new Server(server);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/img')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

const upload = multer({ storage: storage })

// const upload = multer({ dest: 'public/img/' })
app.use(express.static("public"));
app.use(express.urlencoded());
app.use(express.json());


function loadNews() {
    try {
        const newsData = fs.readFileSync('news.json', 'utf-8');
        return JSON.parse(newsData);
    } catch (error) {
        console.error('Ошибка при загрузке новостей:', error);
        return [];
    }
}

function saveNews(news) {
    try {
        fs.writeFileSync('news.json', JSON.stringify(news));
    } catch (error) {
        console.error(error)
    }
}

function getHtmlWithNews(inputNews) {
    try {
        const html = fs.readFileSync('index.html', 'utf-8')
        const htmlArray = inputNews.map((news) => ['<div>' + returnNewsHtmlBlock(news) + '</div><br>'])
            .reduce(
                (news, currentValue) => news + currentValue)
            .toString()
        const updatedHtml = html.replace('#news', htmlArray)
        return updatedHtml
    } catch (error) {
        console.error(error)
    }
}

app.get('/', (req, res) => {
    const news = loadNews()
    const html = getHtmlWithNews(news)
    res.send(html)
})

app.post('/', upload.single('image'), (req, res) => {
    const newsArray = loadNews()
    const { title, description } = req.body
    const news = {
        id: newsArray.length,
        title,
        description,
        img: "img/" + req.file.filename
    }
    newsArray.push(news)
    saveNews(newsArray)
    io.emit('update news', news)
    res.redirect('/upload-successful')
    // res.sendStatus(200)
    // res.end('Новость загрузилась')
})

app.delete('/', (req, res) => {
    const itemId = req.body.id;
    let news = loadNews()
    news = news.filter(n => n.id != itemId)
    saveNews(news)
    console.log(`Элемент с ID ${itemId} успешно удален.`);
    io.emit('delete news', itemId)
    res.send(`Элемент с ID ${itemId} успешно удален.`);
});

app.get('/upload-successful', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'successful.html'))
})

server.listen(3000, () => {
    console.log('Server start');
})