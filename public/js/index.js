var socket = io();

socket.on('connect',function(){
    console.log('connected to server');

    // socket.emit('createMessage',{
    //     to:"hemin@gmail.com",
    //     text:"hey, Good Morning..."
    // });
});

socket.on("disconnect",function(){
    console.log('disconnected from server');
});

socket.on("newEmail",function(email){
    console.log('New Email',email);
});

socket.on('newMessage',function(message){
   console.log('newMessage',message);
});



