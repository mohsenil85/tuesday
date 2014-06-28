var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.listen(8000, function(){
  console.log('listening on *:8000');
});
