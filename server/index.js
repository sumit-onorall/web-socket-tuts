const http = require('http');
const WebSocketServer = require('websocket').server;
let connection = null;

const httpServer = http.createServer((req, res) => {
    console.log('we have received a request...');
})


const websocket = new WebSocketServer({
    "httpServer": httpServer
});

websocket.on("request", (request) => {
    connection = request.accept(null, request.origin);
    connection.on('open', () => console.log("Opened!!!"));
    connection.on('close', () => console.log("CLOSED!!!"));
    connection.on('message', (msg) => {
        console.log(`Received message: ${msg.utf8Data}`);
    });

    sendEvery5Seconds();
})


httpServer.listen(8080, () => console.log('My server is listening on port 8080'));



function sendEvery5Seconds() {
    connection.send(`Message ${Math.random()}`);

    setTimeout(sendEvery5Seconds, 5000);
}