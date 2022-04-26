var express = require('express')
const path = require("path");
var app = new express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)


// app.set('static', path.join(__dirname, 'static'));

app.use(express.static(path.join(__dirname, 'static')));

/*
* on starting the app route it to the main html page
* */
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})
app.use(express.static(path.join(__dirname, 'static')));
/*
* starting the connection
* */

// connect
io.on('connect', function(client){
    // console.log(client)
    console.log('socket opened')
//   // smiple logic
    client.emit('connected');
    client.on('join', function(name){
      // added property name
    	client.nickname = name;
      console.log(client.nickname)
        console.log(client)

    })


client.on('message', function(data){
    console.log(data);
    client.emit('msg', data);
    // console.log("push notification");
 var nickname = client.nickname ;
    client.broadcast.emit('messages', data) //--> all clients except
    // client.emit('msg', nickname + ': ' + data)

    io.emit('all',data);
    client.emit('msg',data);
})
})





















http.listen(3000);