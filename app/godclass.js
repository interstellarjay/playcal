/*
  OPEN SOURCE - Snippets of Code
  Author: Jay Matthew Bedeau
*/

/* S E R V E R */
//Basic app setup
  var express = require('express');
  var app = express();
  var mongodb = require('mongodb');
  var response = '';
//Simple routing
  //HOME
  app.get('/', function (req, res){
    loginToDatabase();
    res.send(response);
  });
  //USER
  app.get('/user/', function (req, res){
    res.send("Hello USER route!");
  });
  //POSTS
  app.get('/posts/', function (req, res){
    res.send("Hello POSTS route!");
  });
//Listen on port 8080
  const PORT = 8080;
  app.listen(PORT, function () {
    console.log("Server listening on : " + PORT);
  });


function loginToDatabase(){
  var uri = "mongodb://devuser:!C0deU$3r@ds151078.mlab.com:51078/playcal_dev";
  mongodb.MongoClient.connect(uri, function (err, db) {
    //Abort if err
      if (err){
        throw err;
      }
      //Get database content
      var content = db.collection('content');
      response = content.find();

  });
}


/* D A T A B A S E */
//Connect to the MongoDB database (mLab)
