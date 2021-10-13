const { Router }         = require('express');
const { cacheInit }      = require('../middlewares/cache');
const { verificarToken } = require('../middlewares/verificacion-jwt');
const { 
    obtenerProductos,
    editarProducto,
    borrarProducto,
    nuevoProducto,
    obtenerProductoPorNombre,
    obtenerProductoPorId
    } = require('../controllers/producto.controller');

const router = Router();

router.get('/products/all', verificarToken, cacheInit,  obtenerProductos);
router.get('/products/search/:nombre', verificarToken, cacheInit,  obtenerProductoPorNombre);
router.get('/products/search/:id', verificarToken, cacheInit, obtenerProductoPorId);
router.post('/products/new', verificarToken, nuevoProducto);
router.put('/products/edit/:id', verificarToken, editarProducto);
router.delete('/products/delete/:id', verificarToken, borrarProducto);


module.exports = router;