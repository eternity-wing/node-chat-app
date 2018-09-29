const path = require('path');
const http = require('http');
const express = require('express')
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);


const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {

    socket.emit('newMessage', {
        from: "mosy@gmail.com",
        text: "salam",
        createAt: new Date()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage ', message);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});



server.listen(port, () => console.log(`Server is up on port ${port}!`))

module.exports = {app};