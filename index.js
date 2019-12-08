const express=require('express');
const http=require('http');
const WebSocket =require('ws');
const app = express();

const server = http.createServer(app);


const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        console.log(data);
    })});

server.listen(process.env.PORT || 8999, () => {

    console.log("Server is running");
});
