const path=require('path');
const http=require('http');
const express=require('express');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app=express();
var server=http.createServer(app);
var io = socketIO(server);

console.log(path.join(__dirname,' ../public'));

app.use(express.static(publicpath));

io.on('connection',(socket)=>{
    console.log('New User connected');

    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);

        io.emit('newMessage',{
            from:message.from,
            text:message.text,
            createAt:new Date().getTime()
        });
    })

    socket.on('disconnect',()=>{
        console.log("user was disconnected");
    });
});

server.listen(port,()=>{
    console.log(`server started on ${port}`);
});

// first changes for shashvat commit