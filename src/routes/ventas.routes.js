const { Router }        = require('express');
const { cacheInit }     = require('../middlewares/cache');
const { 
    obtenerVentas,
    nuevaVenta
 } = require('../controllers/ventas.controller')
 
const router            = Router();

// router.get('/sales/all', cacheInit, obtenerVentas);
router.get('/sales/all', cacheInit, obtenerVentas);
router.post('/sales/new', nuevaVenta);


module.exports = router;