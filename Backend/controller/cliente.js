// Import Modelo model
Cliente = require('../models/cliente');
// Handle index actions
exports.index = function (req, res) {
    Cliente.get(function (err, clientes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        res.json({
            status: "success",
            data: clientes
        });
    });
};

// Handle create marcas actions
exports.new = function (req, res) {
    var cliente = new Cliente();
    cliente._id = req.body.cedula;
    cliente.nombre = req.body.nombre;
    cliente.apellido1 = req.body.apellido1;
    cliente.apellido2 = req.body.apellido2;
    cliente.correo = req.body.correo;
    cliente.telPrincipal = req.body.telPrincipal;
    cliente.telSecundario = req.body.telSecundario;
    // save the contact and check for errors
    cliente.save(function (err) {
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
        Cliente.find({ '_id': req.params.cliente_id }, function (err, cliente) {

            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
                return
            }
            res.json({
                status: "success",
                data: cliente
            });
        });
};

// Handle update cliente info
exports.update = function (req, res) {
    Cliente.findById(req.params.cliente_id, function (err, cliente) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
            return
        }
        cliente.correo = req.body.correo;
        cliente.telPrincipal = req.body.telPrincipal;
        cliente.telSecundario = req.body.telSecundario;
        // save the model and check for errors
        cliente.save(function (err) {
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
// Handle delete cliente
exports.delete = function (req, res) {
    Cliente.deleteOne({
        _id: req.params.cliente_id
    }, function (err, cliente) {
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