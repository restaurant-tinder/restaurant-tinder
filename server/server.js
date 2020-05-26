const express = require('express');
const RoomService = require('./service/roomservice');

const app = express();
const service = new RoomService();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post('/api/rooms', (req, res) => {
    service.createRoom((response) => {
        res.send(JSON.stringify(response));
    })
})

app.post('/api/rooms/start', (req, res) => {
    console.log(req.body);
    let body = req.body;
    service.getRestaurants(body.id, body.term, body.location, (results) => {
        res.send(JSON.stringify(results));
    })
})

app.post('/api/rooms/:id/join', (req, res) => {
    service.joinRoom(req.params.id, (result) => {
        res.send(JSON.stringify(result));
    })
})

app.listen(8080, () => {
    console.log('Server started...')
})