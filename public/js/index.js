var socket = io();

socket.on('connect',function(){
    console.log('connected to server');

    socket.emit('createEmail',{
        to:'hemin@gmail.com',
        text:'hey, This is My Account'
    })

    socket.emit('createMessage',{
       from:'hemin',
       text:'yup, that works for me.'
    });
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



