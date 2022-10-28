const url = "ws://localhost:8082";
const ws = new WebSocket(url);

const msgInput = document.getElementById("msgInput");
const msgBox = document.getElementById("msgBox");
const sendBtn = document.getElementById("sendBtn");

sendBtn.disabled = true;

ws.addEventListener("open", () => {
  console.log("we are connected... (from client)");
  sendBtn.disabled = false;

  //   ws.send("hey, whats up?");
});

ws.addEventListener("message", (event) => {
  // message is contained in event.data
  console.log(event);

  const h4 = document.createElement("h4");
  msgBox.append(h4);
  h4.innerText = event.data;
  //   msgBox.innerText = event.data;
});

sendBtn.addEventListener("click", () => {
  ws.send(msgInput.value);

  msgInput.value = "";
});
