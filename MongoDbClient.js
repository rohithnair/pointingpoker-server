const MongoClient = require('mongodb').MongoClient;
const shortid = require('shortid');
const url="mongodb://pointingpokeradmin:pointingpoker@localhost:27017";
const dbName="pointingpoker";
function MongoDbClient()
{
   this.createSession=function(sessionDetails)
   { 
    const id=shortid.generate();
    MongoClient.connect(url, function(err, client) {   
        const db = client.db(dbName);
       
        const collection = db.collection('sessions');
            var session ={
               session_id:id,
               owner_name:sessionDetails.joinName
            };
            collection.insertOne(session);
        });
        return id;
   }
}
module.exports= {MongoDbClient:MongoDbClient};