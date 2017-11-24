var app = require('express')();
var http = require('http').Server(app);
var $ = require('jquery');
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
           //console.log(searchFor("toronto"));
           //console.log(JSON.stringify(response, null, 2));
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


/**
 * Use Google's customsearch API to perform a search query.
 * See https://developers.google.com/custom-search/json-api/v1/using_rest.
 *
 * param {string} query   Search query to perform, e.g. "test"
 *
 * returns {object}        See response data structure at
 *                         https://developers.google.com/custom-search/json-api/v1/reference/cse/list#response
 */
// $(document).ready(function() {( query="toronto" ) => {
  
//     // Base URL to access customsearch
//     var urlTemplate = "https://www.googleapis.com/customsearch/v1?key=%KEY%&cx=%CX%&q=%Q%";
  
//     // Script-specific credentials & search engine
//     var ApiKey = "AIzaSyDe80pVuP-mC6NQtMttxsmBta0J3HXrvLM";
//     var searchEngineID = "001821595967333671065:nb59ve0r6gs";
  
//     // Build custom url
//     var url = urlTemplate
//       .replace("%KEY%", encodeURIComponent(ApiKey))
//       .replace("%CX%", encodeURIComponent(searchEngineID))
//       .replace("%Q%", encodeURIComponent(query));
  
//     var params = {
//       muteHttpExceptions: true
//     };
  
//     $.ajax({
//       url: url,
//       type: 'GET',
//       success: (result) =>{
//         console.log(result);
//       }
//     })
  
//     // Perform search
//     //Logger.log( UrlFetchApp.getRequest(url, params) );  // Log query to be sent
   
   
//     // var response = UrlFetchApp.fetch(url, params);
//     // var respCode = response.getResponseCode();
  
//     // if (respCode !== 200) {
//     //   throw new Error ("Error " +respCode + " " + response.getContentText());
//     // }
//     // else {
//     //   // Successful search, log & return results
//     //   var result = JSON.parse(response.getContentText());
//     //   Logger.log( "Obtained %s search results in %s seconds.",
//     //              result.searchInformation.formattedTotalResults,
//     //              result.searchInformation.formattedSearchTime);
//     //   return result;
//    // }
//   })}