const express=require('express');
const http=require('http');
const WebSocket =require('ws');
const app = express();
const CommandProcessor=require("./CommandProcessor").CommandProcessor;
let commandProcessor=new CommandProcessor();
const server = http.createServer(app);


const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        let jsonData=JSON.parse(data);
        if(jsonData.command === 'START_SESSION')
        {
          console.log("Name is "+jsonData.joinName);
          commandProcessor.processCommand(jsonData);
        }       

    })});

server.listen(process.env.PORT || 8999, () => {

    console.log("Server is running");
});
