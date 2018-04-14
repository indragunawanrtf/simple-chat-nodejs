let net = require('net');
let sockets = [];

let server = net.createServer((socket) => {
  // Setiap socket yang masuk dipush ke array 
  sockets.push(socket);

  socket.on('data', (data) => {
    for(let i = 0; i < sockets.length; i++) {
      if(sockets[i] == socket) continue;
      sockets[i].write(data);
    }
  });
});

server.listen(3000);
console.log("Server is running in Port http://localhost:3000");
