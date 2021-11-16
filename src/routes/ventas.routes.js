const { Router }         = require('express');
const { cacheInit }      = require('../middlewares/cache');
const { verificarToken } = require('../middlewares/verificacion-jwt'); 
const { 
    obtenerVentas,
    nuevaVenta,
    obtenerVentaPorId
} = require('../controllers/ventas.controller')
const { comprarMercadopago } = require('../controllers/mercadogpago.controller');  

const router            = Router();

router.get('/sales/all', verificarToken, cacheInit, obtenerVentas);
router.get('/sales/:id', verificarToken, cacheInit, obtenerVentaPorId);
router.post('/sales/new', verificarToken, nuevaVenta);
router.post('/comprar-mercadopago', comprarMercadopago);
// router.get('/sales/all', cacheInit, obtenerVentas);
// router.post('/sales/new', nuevaVenta);


module.exports = router;