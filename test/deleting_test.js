const assert = require('assert')
const UcChar = require('../models/ucchar');

//Describe tests
describe('Deleting records', function(){

 var char;

   beforeEach(function(done){
    char = new UcChar({
    name: 'Caesar'
   });
   
   char.save().then(function() {
    done();
   });
  });
 
 // Deleting tests
 it('Deletes one record from the database', function(done) {
  UcChar.findOneAndRemove({name:'Caesar'}).then(function(){
   UcChar.findOne({name:'Caesar'}).then(function(result){
    assert(result === null);
    done();
   });
  });
 });

});