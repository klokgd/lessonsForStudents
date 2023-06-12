const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, "views"));

function loadTodolists() {
    const todos = fs.readFileSync("todolists.json", "utf8");
    return JSON.parse(todos);
}

app.get("/", (req, res) => {
    // const todolists = loadTodolists();
    // const anyTodos = todolists.length > 0;
    res.render("index", {
        title: "Мои контакты",
        email: "gavgav@mycorp.com",
        phone: "+1234567890"
    });
});
// app.get("/", (req, res) => {
//     const todolists = loadTodolists();
//     const anyTodos = todolists.length > 0;
//     console.log(anyTodos)
//     res.render("index", {
//         anyTodos: anyTodos,
//         todolists: todolists,
//     });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
