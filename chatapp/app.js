var express = require('express')
const path = require("path");
var app = new express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
app.use(express.static(path.join(__dirname, 'static')));
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})
app.use(express.static(path.join(__dirname, 'static')));
io.on('connect', function(client){
    client.emit('connected');
    client.on('join', function(name){
    	client.nickname = name;
      console.log(client.nickname)
    })
client.on('message', function(data){
 var nickname = client.nickname ;
    client.broadcast.emit('messages', data) //--> all clients except
})
})





















http.listen(3000);