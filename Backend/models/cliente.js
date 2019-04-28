var mongoose = require('mongoose');
// Setup schema
var clienteSchema = mongoose.Schema({
    _id: Number,
    nombre: {
        type: String,
        required: true
    },
    apellido1: {
        type: String,
        required: true
    },
    apellido2: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    telPrincipal: {
        type: String,
        required: true,
        unique: true
    },
    telSecundario: {
        type:[String],
        required: false
    }},
     { _id: false });
// Export Estado model
var Cliente = module.exports = mongoose.model('Cliente', clienteSchema);
module.exports.get = function (callback, limit) {
    Cliente.find(callback).limit(limit);
}