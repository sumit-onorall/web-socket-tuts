const WebSocket = require("ws");

// create a new websocket server
const wss = new WebSocket.Server({ port: 8000 });

// events inside websockets
wss.on("connection", (ws) => {
  console.log("A new client is connected!!");

  // listen for more events
  ws.on("message", (data) => {
    console.log(data.toString());
  });

  // send data to client
  const user = {
    name: "Sumit Sasidharan",
    age: 32,
    email: "sumit@gmail.com",
  };
  ws.send(JSON.stringify(user));
});
