// Import Modelo model
Vehiculo = require('../models/vehiculos');
// Handle index actions
exports.index = function (req, res) {
    Vehiculo.get(function (err, vehiculos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: vehiculos
        });
    });
};

// Handle create marcas actions
exports.new = function (req, res) {
    var vehiculo = new Vehiculo();
    vehiculo.name = req.body.name;
    // save the contact and check for errors
    vehiculo.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success"
        });
    });
};
// Handle view vehicule info by id
exports.view = function (req, res) {
    Vehiculo.find({ '_id': req.params.vehiculo_id }, function (err, vehiculo) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: vehiculo
            });
        });
};

// Handle update vehiculo info
exports.update = function (req, res) {
    Vehiculo.findById(req.params.vehiculo_id, function (err, vehiculo) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        vehiculo.name = req.body.name;
        // save the model and check for errors
        vehiculo.save(function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success"
            });
        });
    });
};
// Handle delete vehiculo
exports.delete = function (req, res) {
    Vehiculo.deleteOne({
        _id: req.params.vehiculo_id
    }, function (err, vehiculo) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
        });
    });
};