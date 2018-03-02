// Initialize express server
var express = require('express');
var app = express();

// Read port from env loaded or by default port 3000
var PORT = process.env.PORT || 3000;

// To serve static assets mount directory 
app.use(express.static(__dirname + "/public"));

// To serve src assets , mount src folder with alias 'js'
// files inside src folder will be able to be accessed with "js" alias
app.use("/js", express.static(__dirname + "/src"))

// Serve index.html from the mounted public directory
app.get('/', function(req, res){ 

    // Send index file on wire
    res.sendFile('index.html');
});

// Boot server
var server = app.listen(PORT, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('App running at http://%s:%s', host, port);
 
});
