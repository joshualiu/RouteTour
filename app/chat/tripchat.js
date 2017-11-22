var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8080//process.env.PORT || 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/tripchat.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(tripID, username,  msg){
    io.emit('chat message', tripID, username, msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
