const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());


function loadNews() {
  try {
    const newsData = fs.readFileSync('news.json');
    return JSON.parse(newsData);
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
    return [];
  }
}


app.get('/news', (req, res) => {
  const news = loadNews();
  const randomIndex = Math.floor(Math.random() * news.length);
  const currentNews = news[randomIndex];

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Новости</title>
        <style>
          .news {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
  
          .news-item {
            width: 300px;
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
          }
  
          .news-title {
            font-weight: bold;
            margin-bottom: 10px;
          }
  
          .news-image {
            width: 100%;
            margin-bottom: 10px;
          }
  
          .news-content {
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <h1>Новости</h1>
        <div class="news">
          <div class="news-item">
            <h2 class="news-title">${currentNews.title}</h2>
            <img class="news-image" src="${currentNews.image}" alt="${currentNews.title}">
            <p class="news-content">${currentNews.content}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  res.send(html);
});


app.get('/news', (req, res) => {
  const news = loadNews();
  const randomIndex = Math.floor(Math.random() * news.length); 
  const currentNews = news[randomIndex];
  res.json(currentNews);
});

app.listen(8080, () => {
  console.log('Сервер запущен на порту 8080');
});