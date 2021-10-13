const { Router }         = require('express');
const { cacheInit }      = require('../middlewares/cache');
const { verificarToken } = require('../middlewares/verificacion-jwt'); 
const { 
    obtenerVentas,
    nuevaVenta
 } = require('../controllers/ventas.controller')
 
const router            = Router();

// router.get('/sales/all', cacheInit, obtenerVentas);
// router.get('/sales/all', verificarToken, cacheInit, obtenerVentas);
// router.post('/sales/new', verificarToken, nuevaVenta);
router.get('/sales/all', cacheInit, obtenerVentas);
router.post('/sales/new', nuevaVenta);


module.exports = router;