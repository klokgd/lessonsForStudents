const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.static("public"));
app.use(express.urlencoded());


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
        const htmlArray = inputNews.map((news) => [`<h1>${news.title}</h1><br>
        <img src="${news.img}">
        <br><p>${news.description}</p><br>`])
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

app.post('/', (req, res) => {
    const newsArray = loadNews()
    const { title, description } = req.body
    // const tilte = req.body.title
    // const description = req.body.description
    const news = { title, description }
    newsArray.push(news)
    saveNews(newsArray)
    res.end('Новость загрузилась')
})

app.listen(3000)