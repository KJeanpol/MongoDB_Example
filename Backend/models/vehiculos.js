var mongoose = require('mongoose');
// Setup schema
var vehiculoSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    }});

// Export Estado model
var Vehiculo = module.exports = mongoose.model('Vehiculo', vehiculoSchema);
module.exports.get = function (callback, limit) {
    Vehiculo.find(callback).limit(limit);
}