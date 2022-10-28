const url = "ws://localhost:9876/websocket";
const server = new WebSocket(url);

const message = document.getElementById('messages');
const input = document.getElementById('message');
const btn = document.getElementById("sendBtn");

btn.disabled = true;
btn.addEventListener('click', sendMessage, false);


// Only send messages when the server is 'open' or it's 'connected'
server.onopen = () => {
    btn.disabled = false;
}

server.onmessage = function(event) {
    const { data } = event;
    generateMessageEntry(data, 'Server');
}

function generateMessageEntry(msg, type) {
    const newMessage = document.createElement("div");
    newMessage.innerText = `${type} says: ${msg}`;
    message.appendChild(newMessage);
}

function sendMessage() {
    const text = input.value;
    generateMessageEntry(text, "Client");
    server.send(text);
}