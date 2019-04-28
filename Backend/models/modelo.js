const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//Modelo Schema
let modeloSchema= Schema({
    name:{
    type:String,
    required: true}  
},
{versionKey: false});

var Modelo = module.exports = mongoose.model('Modelo', modeloSchema);
module.exports.get = function (callback, limit) {
    Modelo.find(callback).limit(limit);
}
