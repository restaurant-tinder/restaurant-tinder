const io = require('socket.io-client');
const ENDPOINT = 'localhost:8080';
const socket = io.connect(ENDPOINT);

socket.on('connected', str => {
    console.log(str);
})

export const startTournament = async () => {
    socket.emit('create');
    let id = ""
    await socket.on('roomCreated', (result) => {
        id = result
    });
    console.log(id) // empty
    return id
}

export const joinTournament = (roomID) => {
    const data = {id: roomID}
    socket.emit('join', data)
    socket.on('joined', result => {
        console.log(result)
    })
}