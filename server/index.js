const app = require('express')();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server })


// When connection is established event
wss.on("connection", function connection(ws) {
    console.log('a new client connected..')
    ws.send("Welcome new client!!");

  ws.on("message", function message(data, isBinary) {
    console.log("received: %s", data);
    // ws.send('Got ur mesg, its: ' + data)

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  
});




app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 8000;
server.listen(port, () => {
    console.log('Lisening on port ' + port);
})