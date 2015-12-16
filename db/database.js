// mongoose is my db
var mongoose = require('mongoose');

// specify protocol://server/dbname
var connectionString = "mongodb://localhost/spiritanimals";

// physically connect to mongodb
mongoose.connect(connectionString);

  // events to listen to!
  mongoose.connection.on('connected', function(){
    console.log('The spirits are alive!');
  });

  mongoose.connection.on('error', function(error){
    console.log('Unstable creature! ' + error);
  });

  mongoose.connection.on('disconnected', function(){
    console.log('HALLLLLP! DB IS DIE');
  });
