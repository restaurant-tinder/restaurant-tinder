const express = require('express');
const RoomService = require('./service/roomservice');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

let service = new RoomService();

const cors = require("cors");

app.use(cors());

app.use(express.json());

io.on('create', socket => {
    service.createRoom(result => {
        socket.emit('roomCreated', result);
    })
})

io.on('join', socket => {
    let id = socket.handshake.query.id;

    service.joinRoom(id, result => {
        socket.join(id);
        socket.emit(result);
    })
})

io.on('getRestaurants', socket => {
    let id = socket.handshake.query.id;
    let term = socket.handshake.query.id;
    let location = socket.handshake.query.location;

    service.getRestaurants(id, term, location, result => {
        socket.broadcast.to(id).emit('gameStarted', result);
    })
})

io.on('vote', socket => {
    let roomId = socket.handshake.query.roomId;
    let playerId = socket.handshake.query.playerId;
    let restaurantId = socket.handshake.query.restaurantId;

    service.vote(roomId, playerId, restaurantId, (player) => {
        socket.emit('voted', player);
    }, (room) => {
        io.to(roomId).emit('roundFinished', room);
    })
})

server.listen(8080, () => {
    console.log('Server started...')
})