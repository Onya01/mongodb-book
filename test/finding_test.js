const assert = require('assert')
const UcChar = require('../models/ucchar');

//Describe tests
describe('Finding records', function(){

 var char;

   beforeEach(function(done){
    char = new UcChar({
    name: 'Caesar'
   });
   
   char.save().then(function() {

    done();
   });
  });
 
 // Finding tests
 it('Finds one record from the database', function(done) {

  UcChar.findOne({ name:'Caesar' }).then(function(result){
   assert(result.name === 'Caesar');
   done();
  });

 });

 it('Finds one record by ID from the database', function(done) {

  UcChar.findOne({ _id:char._id }).then(function(result){
   assert(result._id.toString() === char._id.toString());
   done();
  });

 });

});