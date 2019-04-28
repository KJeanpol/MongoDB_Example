const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//Estilo Schema
let estiloSchema= Schema({
    name:{
    type:String,
    required: true}
});

var Estilo = module.exports = mongoose.model('Estilo', estiloSchema);
module.exports.get = function (callback, limit) {
    Estilo.find(callback).limit(limit);
}

