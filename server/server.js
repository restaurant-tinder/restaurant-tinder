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

io.on('connection', socket => {
    socket.emit('connected', "youre connected");

    socket.on('create', () => {
        console.log('in create');
        service.createRoom(result => {
            socket.emit('roomCreated', result);
        })
    })

    socket.on('join', data => {
        let id = data.id;
    
        service.joinRoom(id, result => {
            socket.join(id);
            socket.emit('joined', result);
        })
    })

    socket.on('getRestaurants', query => {
        let id = query.id;
        let term = query.term;
        let location = query.location;
        service.getRestaurants(id, term, location, result => {
            io.in(id).emit('gameStarted', result);
        })
    })

    socket.on('vote', query => {
        let roomId = query.roomId;
        let playerId = query.playerId;
        let restaurantId = query.restaurantId;
    
        service.vote(roomId, playerId, restaurantId, (player) => {
            socket.emit('voted', player);
        }, (room) => {
            io.in(id).emit('roundFinished', room);
        })
    })
})

server.listen(8080, () => {
    console.log('Server started...')
})