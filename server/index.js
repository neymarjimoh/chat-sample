const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./routes/router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const connections = [];

io.on('connection', (socket) => {
    connections.push(socket);
    console.log('New client connected', connections.length);

    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        
        if(error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined` });

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    })

    // socket.on('getUsers', (users, callback) => {
    //     const { user } = getUsersInRoom({ room, name, id:socket.id });

    //     io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });


    //     callback();
    // })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    })    

    socket.on('disconnect', (oldsocket) => {

        const user = removeUser(socket.id);
        io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.`})
        connections.pop(oldsocket);
        console.log(`Client disconnected!.. ${connections.length} still connected`);
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));