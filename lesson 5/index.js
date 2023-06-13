let http = require('http');
let express = require('express');
let { Server } = require('socket.io');

let app = express();
let server = http.createServer(app);
let io = new Server(server);

app.use(express.static(__dirname + "/public"));

const colors = {
    black: "black",
    red: "red",
    purple: "#800080"
}

io.on("connection", function (socket) {
    console.log("user connected..." + socket.id);

    // io.emit("greets", "New user, " + socket.id);
    // socket.emit("greets", "New user, " + socket.id);
    // socket.broadcast.emit("greets", "New user, " + socket.id);



    socket.on("sendMessage", function (data) {
        console.log(data);
        //io.emit("message", data);
        data.checkboxes.forEach(checkbox => {
            data.color = colors[checkbox.name]
            io.to(checkbox.name).emit("message", data);
        });
    })

    socket.on("changeRoom", function (room) {
        console.log(room);
        if (room.checked) {
            socket.join(room.name)
        } else {
            socket.leave(room.name)
        }
    })

    socket.on('slide-next', () => {
        console.log('Click next slide')
        socket.broadcast.emit('slide-next')
    })
    socket.on('slide-prev', () => {
        console.log('Click prev slide')
        socket.broadcast.emit('slide-prev')
    })

    socket.on("move", function (data) {
        let temp = users.find(val => val.name == data.name);
        let index = users.indexOf(temp)
        if (index != -1) users[index] = data;
        io.emit("changePos", users);
    })
    let users = [];
    socket.on("new user", function (name) {
        users.push({ name, coords: { x: 0, y: 0 } });
    })

    socket.on('disconnect', () => {
        // io.emit('disconnect', {
        //     userId: socket.id
        // })
        console.log('')
    })
})

server.listen(3000, function () {
    console.log("Server is running...")
})