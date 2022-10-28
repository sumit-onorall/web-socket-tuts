const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

// connection event is fired when a new client is connected
wss.on("connection", (ws) => {
  console.log("new client connected!");
  /* LISTENING TO WEBSOCKET EVENTS */

  // 'data' is any data (like object, json) that is sent by the client , received by the server
  ws.on("message", (data) => {
    console.log(`Client has send us: ${data}`);
    const formattedText = data.toString().toUpperCase();
    ws.send(formattedText);
  });

  ws.on("close", () => {
    console.log("Client has disconnected..");
  });
});
