const assert = require('assert')
const UcChar = require('../models/ucchar');

//Describe tests
describe('Saving records', function(done){
 
 // Create tests
 it('Saves a record to database', function() {
  var char = new UcChar({
   name: 'Caesar'
  });

  char.save().then(function() {
   assert(char.isNew === false);
   done();
  });
 });
});