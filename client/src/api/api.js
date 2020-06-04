const io = require('socket.io-client');
const ENDPOINT = 'localhost:8080';
const socket = io.connect(ENDPOINT);

socket.on('connected', str => {
    console.log(str);
})

export const startTournament = (callback) => {
    socket.emit('create');
    socket.once('roomCreated', (result) => {
        callback(result.id);
    });
}

export const joinTournament = (roomID, callback) => {
    const data = {id: roomID};
    socket.emit('join', data)
    socket.once('joined', (result) => {
        callback(result._id);
    });
}

export const getRestaurants = (query) => {
    socket.emit('getRestaurants', query);
}

export const onGameStarted = (callback) => {
    socket.once('gameStarted', (result) => {
        callback(result);
    })
}

export const vote = (query) => {
    socket.emit('vote', query);
}

export const onVoted = (callback) => {
    socket.once('voted', (player) => {
        callback(player);
    })
}

export const onRoundFinished = (callback) => {
    socket.once('roundFinished', (room) => {
        callback(room);
    })
}