const { Router }        = require('express');

const { 
    crearCliente,
    obtenerClientes
 } = require('../controllers/cliente.controller')
 
const router            = Router();

router.post('/customer/new', crearCliente);
router.get('/customer/all', obtenerClientes);


module.exports = router;