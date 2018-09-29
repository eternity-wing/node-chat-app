var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');
});

socket.on('disconnect', function(data){
    console.log('Disconnect from server');
});

socket.on('newMessage', function(data){
    console.log('New message ', data);
});

