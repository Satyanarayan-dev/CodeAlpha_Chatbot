// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const chatbot = require('./chatbot');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chat message', (msg) => {
        const response = chatbot.getResponse(msg);
        io.emit('chat message', response);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
