var mongoose = require('mongoose');
// Setup schema
var vehiculoSchema = mongoose.Schema({
    _id: String,
    capacidad: {
        type: Number,
        required: true
    },
    idmarca: {
        type: String,
        required: true
    },
    idestilo: {
        type: String,
        required: true
    },
    idmodelo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    cilindrada: {
        type: String,
        required: true
    },
    combustible: {
        type: String,
        required: true
    },
    transmision: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    extras: {
        type: [String],
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
},
    { _id: false });

// Export Estado model
var Vehiculo = module.exports = mongoose.model('Vehiculo', vehiculoSchema);
module.exports.get = function (callback, limit) {
    Vehiculo.find(callback).limit(limit);
}