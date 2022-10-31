const btn = document.querySelector('#btn');
const message = document.querySelector("#message");
const h1 = document.querySelector('h1');



const socket = io('http://localhost:3001');

socket.on('connection');

// Listening to incoming events
socket.on('message', (data) => {
    h1.innerHTML = data;
})

// ON is for listening or receive events, EMIT is for sending
const sendMessage = () => {
    // socket.emit('message', "hey it works!!")
    socket.emit("message", message.value);
    
}



btn.addEventListener("click", sendMessage);