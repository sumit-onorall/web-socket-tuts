const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

// if using ejs
app.set("view engine", "ejs");
app.get("/home", (req, res) => {
  res.render("home");
});


server.listen(3001, () => {
    console.log('Server running...')
})


io.on('connection', (socket) => {
    console.log('User connected: ', socket.id)

    // LISTENING OR RECEIVE THE EVENTS with 'on'
    socket.on('message', (data) => {
        // 'emiting' or sending messages with 'emit' event
        socket.emit('message', data);

        // 'broadcast' sends to everyone but ourself
        socket.broadcast.emit('message', data);
    })
})