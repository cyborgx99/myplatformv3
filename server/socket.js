export const socketLogic = (io) => {
  io.of('/main').on('connection', (socket) => {
    console.log('hi from', socket.id);

    socket.on('joinRoom', (roomId) => {
      socket.room = roomId;
      socket.join(socket.room);
      console.log(socket.room);
    });

    socket.on('inputs', (msg) => {
      socket.broadcast.to(socket.room).emit('change', msg);
    });

    socket.on('disconnect', () => {
      console.log('ffs bye');
    });
  });
};
