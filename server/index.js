const WebSocket = require('ws');
// import WebSocket, { WebSocketServer } from "ws";
const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.resolve(__dirname, '../client')));

const server = app.listen(9876);

const wss = new WebSocket.Server({
    // port: 9876
    server
});

// Clients Array
const clients = [];

wss.on('connection', (ws) => {
    clients.push(ws)
    ws.on('message', (data) => {
        clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toLocaleString());
            }
        });
        // ws.send(data.toLocaleString());
    })
})


