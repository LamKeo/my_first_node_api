var mongoose = require('mongoose');

var SpiritAnimalSchema = new mongoose.Schema({
  Name: String,
  SpiritAnimal: String,
  DoTheyLikeIt: Boolean
});

//String, Number, Date, Boolean, Buffer, Mixed, Array

module.exports = mongoose.model('SpiritAnimals', SpiritAnimalSchema);
//exporting the name of the model, first argument
//schema is validating that the object exists, second argument
