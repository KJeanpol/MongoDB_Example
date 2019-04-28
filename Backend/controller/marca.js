// Import Modelo model
Marca = require('../models/marca');
// Handle index actions
exports.index = function (req, res) {
    Marca.get(function (err, marcas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: marcas
        });
    });
};

// Handle create marcas actions
exports.new = function (req, res) {
    var marca = new Marca();
    marca.name = req.body.name;
    // save the contact and check for errors
    marca.save(function (err) {
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
    Marca.find({ '_id': req.params.marca_id }, function (err, marca) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: marca
            });
        });
};

// Handle update marca info
exports.update = function (req, res) {
    Marca.findById(req.params.marca_id, function (err, marca) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        marca.name = req.body.name;
        // save the model and check for errors
        marca.save(function (err) {
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
// Handle delete marca
exports.delete = function (req, res) {
    Marca.deleteOne({
        _id: req.params.marca_id
    }, function (err, marca) {
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