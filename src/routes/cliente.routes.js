const { Router }        = require('express');

const { 
    crearCliente,
    obtenerClientes,
    obtenerClientePorId
 } = require('../controllers/cliente.controller')
 
const { verificarToken } = require('../middlewares/verificacion-jwt');

const router            = Router();

router.post('/customer/new', verificarToken, crearCliente);
router.get('/customer/all', verificarToken , obtenerClientes);
router.get('/customer/:id', verificarToken , obtenerClientePorId);


module.exports = router;