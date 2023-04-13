
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodSchema = new Schema({
Underscoreid:String , 


text:String 



})

module.exports = {
  Prod : mongoose.model('prod', prodSchema),
}

