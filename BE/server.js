import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://chatapp-steel-five.vercel.app',
        methods: ['GET', 'POST'],
    },
})

const ROOM = 'group'

io.on('connection', (socket) => {
    console.log('a user connected', socket.id)

    // join the user
    socket.on('joinRoom', async (userName) => {
        console.log(`${userName} is joined chat`)
        await socket.join(ROOM);
        socket.to(ROOM).emit('roomNotice', userName)
    })

    socket.on('chatMessage', (msg) => { //listen
        socket.to(ROOM).emit('chatMessage', msg) //broadcaste
    })

    socket.on('typing', (userName) => {
        socket.to(ROOM).emit('typing', userName)
    })

    socket.on('stopTyping', (userName) => {
        socket.to(ROOM).emit('stopTyping', userName)
    })
})

server.listen(PORT, () => {
  console.log('server running on port', PORT);
});