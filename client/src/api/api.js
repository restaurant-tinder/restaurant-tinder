import axios from './axios-rooms';

export const startTournament = async () => {
    try {
        await axios.post('/api/rooms')
    } catch (error) {
        return error
    }
}

export const joinTournament = async (roomID) => {
    try {
        const res = await axios.post(`/api/rooms/${roomID}/join`)
        return res
    } catch (error) {
        return error
    }
}