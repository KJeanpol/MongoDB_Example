'use strict'

const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//Estilo Schema
let estiloSchema= Schema({
    name:String
});

module.exports=mongoose.model('Estilo',estiloSchema);
