const express = require('express');
const RoomService = require('./service/roomservice');

const app = express();
const service = new RoomService();

app.post('/api/rooms', (req, res) => {
    service.createRoom((response) => {
        res.send(JSON.stringify(response));
    })
})

app.listen(8080, () => {
    console.log('Server started...')
})