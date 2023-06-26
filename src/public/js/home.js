//Declarar Socket.io
const socket = io();

//Manejo de DOM
const input = document.getElementById("textbox");
const chat = document.getElementById("chat");

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    //Enviar mensaje
    socket.emit("message", input.value);
    //Limpiar input
    input.value = "";
  }
});

socket.on("imprimir", (data) => {
  let mensajes = "";
  data.forEach((msj) => {
    mensajes += `${msj.socketId} Escribio: ${msj.message} <br/>`;
  });
  chat.innerHTML = mensajes;
});
