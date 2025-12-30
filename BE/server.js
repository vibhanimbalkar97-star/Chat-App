import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';


const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
})

io.on('connection', (socket) => {
    console.log('a user connected', socket.id)
})

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
});

server.listen(3000, () => {
    console.log('server running at 3000')
})