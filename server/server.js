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

    // socket.emit('newEmail',{
    //     from:'hemin@gmail.com',
    //     text:"hey, what is going on",
    //     createAt:123
    //
    // });

    socket.emit('newMessage',{
        from:'john',
        text:'see you then',
        createAt:12345
    })

    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    })

    socket.on('disconnect',()=>{
        console.log("user was disconnected");
    });
});

server.listen(port,()=>{
    console.log(`server started on ${port}`);
});