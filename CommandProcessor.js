const MongoDbApiClient =require("./MongoDbClient").MongoDbClient;
const mongoDbApi= new MongoDbApiClient();
function CommandProcessor()
{
    this.processCommand=function processCommand(payload)
    {
        if(payload.command === 'START_SESSION')
        {   
          var sessionId=  mongoDbApi.createSession(payload);
          console.log("New session is"+sessionId);
        }
    }
}
module.exports= {CommandProcessor:CommandProcessor};