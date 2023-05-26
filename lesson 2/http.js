const http = require('http')
const fs = require("fs")

// const server = http.createServer(function(req, res) {
//     if (req.url === "/user") {   
//         let data = "";
//         req.on("data", chunk => {
//             data += chunk;
//         });
//         req.on("end", () => {
//             console.log(data);
//             res.end("Данные успешно получены");
//         });
//     }
//     else{
//         fs.readFile("index.html", (error, data) => res.end(data));
//     }
// })

const server = http.createServer(function (req, res) {
    const filePath = req.url.substr(1); // /index
    fs.access(filePath, fs.constants.R_OK, err => {
        // если произошла ошибка - отправляем статусный код 404
        if (err) {
            res.statusCode = 404;
            res.end("Resourse not found!");
        }
        else {
            fs.createReadStream(filePath).pipe(res);
        }
    });
})
// const server = http.createServer(function (req, res) {
//     if (req.url == '/home') {
//         console.log('home')
//         res.statusCode = 404
//         res.write('<h2>THIS HOME!!!</h2>')
//     } else if (req.url == '/office') {
//         console.log('office')
//         res.write('<h2>This office</h2>')
//     } else {
//         res.write('Nothing')
//     }
//     res.end()
// })

const port = 3000

server.listen(port, () => {
    console.log('Server is listen', port)
})
