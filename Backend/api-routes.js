// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to MongoDB RESTApi!',
    });
});

// Import vehiculo controller
var vehiculo = require('./controller/vehiculo');
router.route('/vehiculos')
    .get(vehiculo.index)
    .post(vehiculo.new);
router.route('/vehiculos/:vehiculo_id')
    .get(vehiculo.view)
    .put(vehiculo.update)
    .delete(vehiculo.delete);

router.route('/vehiculos/placa/:marca_id')
    .get(vehiculo.findXPlaca);
router.route('/vehiculos/modelo/:marca_id')
    .get(vehiculo.findXModelo);

router.route('/vehiculos/cantidad/:marca_id')
    .get(vehiculo.getCantidad);

router.route('/vehiculos/precioMenor/:marca_id')
    .get(vehiculo.getMenorPreciobyMarca);

router.route('/vehiculos/precioMayor/:marca_id')
    .get(vehiculo.getMayorPreciobyMarca);


router.route('/vehiculos/promedio/:marca_id')
    .get(vehiculo.getPromPrecioByMarca);




// Import marca controller
var marca = require('./controller/marca');
router.route('/marcas')
    .get(marca.index)
    .post(marca.new);
router.route('/marcas/:marca_id')
    .get(marca.view)
    .put(marca.update)
    .delete(marca.delete);


// Import estilo controller
var estilo = require('./controller/estilo');
router.route('/estilos')
    .get(estilo.index)
    .post(estilo.new);
router.route('/estilos/:estilo_id')
    .get(estilo.view)
    .put(estilo.update)
    .delete(estilo.delete);

// Import modelo controller
var modelo = require('./controller/modelo');
router.route('/modelos')
    .get(modelo.index)
    .post(modelo.new);
router.route('/modelos/:modelo_id')
    .get(modelo.view)
    .put(modelo.update)
    .delete(modelo.delete);


// Import cliente controller
var cliente = require('./controller/cliente');
// cliente routes
router.route('/clientes')
    .get(cliente.index)
    .post(cliente.new);
router.route('/cliente/:cliente_id')
    .get(cliente.view)
    .put(cliente.update)
    .delete(cliente.delete);

module.exports = router;