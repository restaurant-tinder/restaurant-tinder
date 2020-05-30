const io = require('socket.io-client');
const ENDPOINT = 'localhost:8080';
const socket = io.connect(ENDPOINT);

socket.on('connected', str => {
    console.log(str);
})

export const startTournament = (callback) => {
    socket.emit('create');
    socket.once('roomCreated', (result) => {
        callback(result.id)
    });
}

export const joinTournament = (roomID) => {
    const data = {id: roomID}
    socket.emit('join', data)
    socket.on('joined', result => {
        console.log(result)
    })
}

export const getRestaurants = (query) => {
    socket.emit('getRestaurants', query);
}

export const onGameStarted = (callback) => {
    socket.on('gameStarted', (result) => {
        callback(result)
    })
}