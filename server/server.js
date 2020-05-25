const express = require('express');
const RoomService = require('./service/roomservice');

const app = express();
const service = new RoomService();

app.use(express.json());

app.post('/api/rooms', (req, res) => {
    service.createRoom((response) => {
        res.send(JSON.stringify(response));
    })
})

app.post('/api/rooms/start', (req, res) => {
    console.log(req.body);
    let body = req.body;
    // let body = JSON.stringify(req.body);
    service.getRestaurants(body.id, body.term, body.location, (results) => {
        res.send(JSON.stringify(results));
    })
})

app.listen(8080, () => {
    console.log('Server started...')
})