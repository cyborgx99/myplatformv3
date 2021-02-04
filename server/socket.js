export const socketLogic = (io) => {
  io.of('/video').on('connection', (socket) => {
    console.log('hi from /video', socket.id);

    socket.on('join room', async (roomId) => {
      socket.room = roomId;
      socket.join(socket.room);
      console.log(roomId);
      const ids = await io.of('/video').in(socket.room).allSockets();
      const users = Array.from(ids);
      console.log(users);

      if (users.length === 2) {
        console.log('asd');
        socket.to(users[0]).emit('user joined', users[1]);
        socket.emit('other user', users[0]);
      }
    });

    socket.on('offer', (payload) => {
      io.of('/video').to(payload.target).emit('offer', payload);
    });

    socket.on('answer', (payload) => {
      io.of('/video').to(payload.target).emit('answer', payload);
    });

    socket.on('ice-candidate', (incoming) => {
      io.of('/video')
        .to(incoming.target)
        .emit('ice-candidate', incoming.candidate);
    });

    socket.on('otherUserCamera', (payload) => {
      console.log(payload);
      io.of('/video')
        .to(payload.otherUser)
        .emit('turningCamera', payload.camera);
    });

    socket.on('disconnect', () => {
      io.of('/video').emit('partnerDisconnect', '');
      console.log('/video socket left');
    });
  });

  io.of('/main').on('connection', (socket) => {
    console.log('hi from /main', socket.id);

    socket.on('joinRoom', (roomId) => {
      socket.room = roomId;
      socket.join(socket.room);
      console.log('/main', roomId);
    });

    // data transfer
    socket.on('inputs', (data) => {
      console.log(data);
      const { eventName, value } = data;
      socket.broadcast.to(socket.room).emit(eventName, value);
    });
    // data transfer

    socket.on('disconnect', () => {
      console.log('/main socket left');
    });
  });
};
