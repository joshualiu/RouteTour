var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var port = 8080//process.env.PORT || 8080;
var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var nlu = new NaturalLanguageUnderstandingV1({
  username: "9288d0a1-dc1d-4dab-a361-af98a4ca9b8e",
  password: "PTEEOLwNwFkW",
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});



app.get('/', function(req, res){
  res.sendFile(__dirname + '/tripchat.html');
});

io.on('connection', function(socket){
  
  socket.on('chat message', function(tripID, username,  msg){
    io.emit('chat message', tripID, username, msg);
    if(msg.includes('watson')){
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
          strGoogleQuery = '';
          // filterResultsArray = ['hey watson'];
          // queryArray = [];
          
          response.keywords.forEach((item) =>{ 
            if(!(item['text'].includes('watson'))){
              strGoogleQuery += item['text'] + ' ';
              //queryArray.push(item['text']);
            }
          })
          //compareArr(tripID,username,queryArray,filterResultsArray,strGoogleQuery);
          //io.emit('chat message',strGoogleQuery);
           searchFor(tripID, username,strGoogleQuery);
           //searchFor();
           //console.log(JSON.stringify(response, null, 2));
     });
    }
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

/**
 * Use Google's customsearch API to perform a search query.
 * See https://developers.google.com/custom-search/json-api/v1/using_rest.
 *
 * param {string} query   Search query to perform, e.g. "test"
 *
 * returns {object}        See response data structure at
 *                         https://developers.google.com/custom-search/json-api/v1/reference/cse/list#response
 */
// compareArr = (tripID,username,queryArray,filterResultsArray,strGoogleQuery) =>{
  
//   if(queryArray.length > filterResultsArray.length){
//     queryArray.forEach((e) =>{
//       if(filterResultsArray.indexOf(e) !== -1){
//         searchFor(tripID,username,strGoogleQuery)
//       }
//     })
//   }else{
//     filterResultsArray.forEach((e) => {
//       if(queryArray.indexOf(e) !== -1){
//         searchFor(tripID,username,strGoogleQuery)
//       }
//     })

//   }
// }



searchFor = (tripID, username,query) => {
  
    // Base URL to access customsearch
    var urlTemplate = "https://www.googleapis.com/customsearch/v1?key=%KEY%&cx=%CX%&q=%Q%";
  
    // Script-specific credentials & search engine
    var ApiKey = "AIzaSyDe80pVuP-mC6NQtMttxsmBta0J3HXrvLM";
    var searchEngineID = "001821595967333671065:nb59ve0r6gs";
  
    // Build custom url
    var url = urlTemplate
      .replace("%KEY%", encodeURIComponent(ApiKey))
      .replace("%CX%", encodeURIComponent(searchEngineID))
      .replace("%Q%", encodeURIComponent(query));
  
    var params = {
      muteHttpExceptions: true
    };
  
    request(url,(error,response) => {
      if(JSON.parse(response.body).items[0].link){
        io.emit('suggestion',tripID, username,JSON.parse(response.body).items[0].link);
      }
    })
  }