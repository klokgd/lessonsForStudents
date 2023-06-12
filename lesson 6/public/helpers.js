const returnNewsHtmlBlock = (news) => `<h1>${news.title}</h1><br>
<span hidden id=${news.id}></span>
<img src="${news.img}">
<br><p>${news.description}</p>
<button type='button' id="${news.id}" class="delete">Удалить</button>
`

module.exports = { returnNewsHtmlBlock }