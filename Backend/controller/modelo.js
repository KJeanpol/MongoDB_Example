// Import Modelo model
Modelo = require('../models/modelo');
// Handle index actions
exports.index = function (req, res) {
    Modelo.get(function (err, modelos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: modelos
        });
    });
};

// Handle create modelos actions
exports.new = function (req, res) {
    var modelo = new Modelo();
    modelo.name = req.body.name;
    // save the contact and check for errors
    modelo.save(function (err) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        
        console.log(modelo);
        res.json({
            status: "success"
        });
    });
};
// Handle view vehicule info by id
exports.view = function (req, res) {
    Modelo.find({ '_id': req.params.modelo_id }, function (err, modelo) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: modelo
            });
        });
};

// Handle update modelo info
exports.update = function (req, res) {
    Modelo.findById(req.params.modelo_id, function (err, modelo) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        modelo.name = req.body.name;
        // save the model and check for errors
        modelo.save(function (err) {
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
// Handle delete modelo
exports.delete = function (req, res) {
    Modelo.deleteOne({
        _id: req.params.modelo_id
    }, function (err, modelo) {
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