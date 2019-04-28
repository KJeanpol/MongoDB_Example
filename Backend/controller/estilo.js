// Import Modelo model
Estilo = require('../models/estilo');
// Handle index actions
exports.index = function (req, res) {
    Estilo.get(function (err, estilos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: estilos
        });
    });
};

// Handle create estilos actions
exports.new = function (req, res) {
    var estilo = new Estilo();
    estilo.name = req.body.name;
    // save the contact and check for errors
    estilo.save(function (err) {
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
    Estilo.find({ '_id': req.params.estilo_id }, function (err, estilo) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: estilo
            });
        });
};

// Handle update estilo info
exports.update = function (req, res) {
    Estilo.findById(req.params.estilo_id, function (err, estilo) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        estilo.name = req.body.name;
        // save the model and check for errors
        estilo.save(function (err) {
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
// Handle delete estilo
exports.delete = function (req, res) {
    Estilo.deleteOne({
        _id: req.params.estilo_id
    }, function (err, estilo) {
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