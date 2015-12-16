var http = require('http');


require('./db/database');

var SpiritAnimal = require('./models/SpiritAnimal');

//.create ({data object}, function(error, model))
SpiritAnimal.create({Name: "Aaron", SpiritAnimal: "Red Panda", DoTheyLikeIt: true}, function(error, animal) {
  if (error) console.log(error);
  console.log(animal);
});


http.createServer(function(request, response) {
  SpiritAnimal.find(function(error, animals) { //get method in mongodb
    if (error) console.log(error);
    response.writeHead(200); //set status 200
    console.log(animals);
    response.write(JSON.stringify(animals));
    response.end();
  });
}).listen(8080);

console.log('api is running');
