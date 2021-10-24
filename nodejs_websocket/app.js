const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
//by zhengkai.blog.csdn.net
//处理socket.on信息并socket.emit回复信息
//这里对接收到的msg做大写处理
io.on('connection', (socket) => {
    //Socket.io by zhengkai.blog.csdn.net
    socket.on('chat message', (msg) => {
      console.log('received: ' + msg);
      socket.emit("chat message", msg.toUpperCase());
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});