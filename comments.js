//Create web server
var server = http.createServer(app);

//Listen for incoming request
server.listen(port, function() {
    console.log('Server is running on port ' + port);
});

//Create WebSocket server
var io = require('socket.io').listen(server);

//Listen for incoming connection
io.sockets.on('connection', function(socket) {
    console.log('A new user connected!');

    //Listen for message from client
    socket.on('message', function(data) {
        console.log('Received message: ' + data);
        //Send message to all connected clients
        io.sockets.emit('message', data);
    });

    //Listen for disconnection
    socket.on('disconnect', function() {
        console.log('A user disconnected!');
    });
});