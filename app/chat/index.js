var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;
var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var nlu = new NaturalLanguageUnderstandingV1({
  username: "9288d0a1-dc1d-4dab-a361-af98a4ca9b8e",
  password: "PTEEOLwNwFkW",
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    nlu.analyze({
      'html': msg, // Buffer or String
      'features': {
        'concepts': {},
        'keywords': {},
      }
    }, function(err, response) {
         if (err)
           console.log('error:', err);
         else
           io.emit('chat message',JSON.stringify(response, null, 2));
           console.log(JSON.stringify(response, null, 2));
     });

  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});














// {
//   "natural-language-understanding": [
//     {
//       "name": "natural-language-underst-natural-la-1511469767957",
//       "plan": "free",
//       "credentials": {
//         "url": "https://gateway.watsonplatform.net/natural-language-understanding/api",
//         "username": "9288d0a1-dc1d-4dab-a361-af98a4ca9b8e",
//         "password": "PTEEOLwNwFkW"
//       }
//     }
//   ]
// }