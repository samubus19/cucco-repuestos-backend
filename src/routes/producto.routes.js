const { Router }           = require('express');
const { cacheInit }        = require('../middlewares/cache');
const { 
    obtenerProductos,
    editarProducto,
    borrarProducto,
    nuevoProducto
    } = require('../controllers/producto.controller');

const router = Router();

router.get('/products/all', cacheInit,  obtenerProductos);
router.get('/products/search/:name', cacheInit,  obtenerProductos);
router.post('/products/new', nuevoProducto);
router.put('/products/edit/:id', editarProducto);
router.delete('/products/delete/:id', borrarProducto);


module.exports = router;