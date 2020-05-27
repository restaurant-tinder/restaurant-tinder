import io from 'socket.io-client';

export const startTournament = () => {
    const ENDPOINT = 'http://localhost:8080';
    const socket = io(ENDPOINT);
    socket.emit('create');
    socket.on('roomCreated', result => {
        console.log(result)
    });
}

// export const joinTournament = (roomID) => {
//     try {
//         const res = await axios.post(`/api/rooms/${roomID}/join`)
//         return res
//     } catch (error) {
//         return error
//     }
// }