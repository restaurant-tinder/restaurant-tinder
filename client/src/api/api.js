const io = require('socket.io-client');

export const startTournament = () => {
    const ENDPOINT = 'http://localhost:8080';
    const socket = io.connect(ENDPOINT);
    socket.emit('create', 'hi');
    socket.on('roomCreated', result => {
        console.log(result)
    });

    socket.on('connected', str => {
        console.log(str);
    })
}

// export const joinTournament = (roomID) => {
//     try {
//         const res = await axios.post(`/api/rooms/${roomID}/join`)
//         return res
//     } catch (error) {
//         return error
//     }
// }