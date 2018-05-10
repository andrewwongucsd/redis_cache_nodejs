var express = require('express');
var fs = require('fs');
var app = express();
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function(){
  console.log('connected');
});

app.delete('/', function(req, res){
  client.del(['SJSU', 'CMPE', 'LIBRARY'], function(err, response) {
    if(response == 1) {
      res.send('this is a delete request and deleted successfully');
    }else{
      res.send('this is a delete request but delete unsuccessfully');
    }
  });
});


app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});

app.get('/:name', function(req, res){
  var name = req.params.name;
  console.log("passing in: "+name);
  var msg = {};
  client.get(name, function(err, reply){
    console.log(err);
    console.log(reply+" retrieved");
    if(reply == null){
      var bitmap = null;
      if(name == 'CMPE'){
        console.log("in CMPE");
        bitmap = fs.readFileSync('static/CMPE.jpg');
      }else if(name == "SJSU"){
        console.log("in SJSU");
        bitmap = fs.readFileSync('static/SJSU.jpg');
      }else if(name == "LIBRARY"){
        console.log("in LIBARAY");
        bitmap = fs.readFileSync('static/LIBRARY.png');
      }
      var base64 = new Buffer(bitmap).toString('base64');
      client.set(name, "data:image/jpeg;base64,"+base64, function(err, reply){
        console.log(reply);
      });
      msg.method = "DB";
      msg.data = "data:image/jpeg;base64,"+base64;
    }else{
      msg.method = "Cache";
      msg.data = reply;
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(msg));
  });
});
app.listen(3000);
console.log('Listening on port 3000...');
