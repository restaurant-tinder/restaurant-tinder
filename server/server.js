const express = require('express');
const RoomService = require('./service/roomservice');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);
const path = require('path');

let service = new RoomService();

const cors = require("cors");

const PORT = process.env.PORT || 8080;

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

        if (roomId == null || playerId == null || restaurantId == null) {
            socket.emit("voteError", {
                roomId: roomId,
                playerId: playerId,
                restaurantId: restaurantId
            });
        }

        service.vote(roomId, playerId, restaurantId, (player) => {
            socket.emit('voted', player);
        }, (room) => {
            io.in(roomId).emit('roundFinished', room);
        })
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

server.listen(PORT, () => {
    console.log('Server started...')
})