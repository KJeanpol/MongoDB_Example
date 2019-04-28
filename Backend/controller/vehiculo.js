// Import Modelo model
Vehiculo = require('../models/vehiculos');
Modelo = require('../models/modelo');
Marca = require('../models/marca');
Estilo = require('../models/estilo');
// Handle index actions
exports.index = function (req, res) {
    Vehiculo.get(function (err, vehiculos) {
        Modelo.populate(vehiculos, { path: "idmodelo" }, function (err, vehiculos) {
            Estilo.populate(vehiculos, { path: "idestilo" }, function (err, vehiculos) {
                Marca.populate(vehiculos, { path: "idmarca" }, function (err, vehiculos) {
                    if (err) {
                        res.json({
                            status: "error",
                            message: err,
                        });
                        return
                    }
                    console.log(vehiculos);
                    res.json({
                        status: "success",
                        data: vehiculos
                    });
                });
            });
        });
    });
};

// Handle create marcas actions
exports.new = function (req, res) {
    var vehiculo = new Vehiculo();
    vehiculo._id = req.body.placa;
    vehiculo.capacidad = req.body.capacidad;
    vehiculo.idmarca = req.body.idmarca;
    vehiculo.idestilo = req.body.idestilo;
    vehiculo.idmodelo = req.body.idmodelo;
    vehiculo.color = req.body.color;
    vehiculo.cilindrada = req.body.cilindrada;
    vehiculo.combustible = req.body.combustible;
    vehiculo.transmision = req.body.transmision;
    vehiculo.year = req.body.year;
    vehiculo.extras = req.body.extras;
    vehiculo.precio = req.body.precio;
    vehiculo.estado = req.body.estado;

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
    Vehiculo.find({ '_id': req.params.vehiculo_id }, function (err, vehiculos) {
        Modelo.populate(vehiculos, { path: "idmodelo" }, function (err, vehiculos) {
            Estilo.populate(vehiculos, { path: "idestilo" }, function (err, vehiculos) {
                Marca.populate(vehiculos, { path: "idmarca" }, function (err, vehiculos) {
                    if (err) {
                        res.json({
                            status: "error",
                            message: err,
                        });
                        return
                    }
                    console.log(vehiculos);
                    res.json({
                        status: "success",
                        data: vehiculos
                    });
                });
            });
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
        vehiculo._id = req.body.placa;
        vehiculo.capacidad = req.body.capacidad;
        vehiculo.idmarca = req.body.idmarca;
        vehiculo.idestilo = req.body.idestilo;
        vehiculo.idmodelo = req.body.idmodelo;
        vehiculo.color = req.body.color;
        vehiculo.cilindrada = req.body.cilindrada;
        vehiculo.combustible = req.body.combustible;
        vehiculo.transmision = req.body.transmision;
        vehiculo.year = req.body.year;
        vehiculo.extras = req.body.extras;
        vehiculo.precio = req.body.precio;
        vehiculo.estado = req.body.estado;
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