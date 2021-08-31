const assert = require('assert')
const UcChar = require('../models/ucchar');

//Describe tests
describe('Updating records', function(){

 var char;

   beforeEach(function(done){
    char = new UcChar({
    name: 'Caesar',
    weight: 50
   });
   
   char.save().then(function() {
    done();
   });
  });
 
 // Updating tests
 it('Updates one record in the database', function(done) {

  UcChar.findOneAndUpdate({name:'Caesar'}, {name:'Uchenna'}).then(function(){
   UcChar.findOne({_id:char._id}).then(function(result){
    assert(result.name === 'Uchenna');
    done();
   });
  });
 
 });

  it('Increments the weight by 1', function(done) {

  UcChar.update({}, {$inc:{weight:1}}).then(function(){
   UcChar.findOne({name:'Caesar'}).then(function(record){
    assert(record.weight === 51);
    done();
   });
  });
 
 });

});