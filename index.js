const express=require('express');
const http=require('http');
const WebSocket =require('ws');
const app = express();

const server = http.createServer(app);


const wss = new WebSocket.Server({ server });

server.listen(process.env.PORT || 8999, () => {
    
});
