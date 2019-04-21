'use strict'

const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//Estilo Schema
let marcaSchema= Schema({
    name:String
});

module.exports=mongoose.model('Marca',marcaSchema);
