const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model
const UcCharSchema = new Schema({
 name: String,
 weight: Number
});

const UcChar = mongoose.model('ucchar',UcCharSchema);

module.exports = UcChar;