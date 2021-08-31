const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe our tests
describe('Nesting records', function(){

 beforeEach(function(done){
  mongoose.connection.collections.authors.drop(function(){
   done();
  });
 });

 //Create test
 it('Create an author with sub-documents', function(done){

  var pat = new Author({
   name: 'Patrick Caesar',
   books: 
   [
    {
     title: 'Name of the wind', 
     pages: 400
    }
   ]
  });

  pat.save().then(function(){
   Author.findOne({name: 'Patrick Caesar'}).then(function(record){
    assert(record.books.length === 1);
    done();
   });
  });
 });

 it('Add a book to an author', function(done){

   var pat = new Author({
   name: 'Patrick Caesar',
   books: 
   [
    {
     title: 'Name of the wind', 
     pages: 400
    }
   ]
  });
  
  pat.save().then(function(){
   Author.findOne({name: 'Patrick Caesar'}).then(function(record){
    // add a book to the books array
    record.books.push({title: "Wise Man's Fear", pages: 500});
    record.save().then(function(){
     Author.findOne({name: 'Patrick Caesar'}).then(function(result){
      assert(result.books.length === 2);
      done();
     });
    });
   });
  });
 });

});