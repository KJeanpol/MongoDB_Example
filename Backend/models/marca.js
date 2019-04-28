'use strict'

const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//Estilo Schema
let marcaSchema= Schema({
    name:{
    type:  String,
    required: true}

    
});
var Marca = module.exports = mongoose.model('Marca', marcaSchema);
module.exports.get = function (callback, limit) {
    Marca.find(callback).limit(limit);
}
