let ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (message) => console.log('we received a msg from server: ' + message.data); 