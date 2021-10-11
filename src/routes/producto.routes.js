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
router.post('/products/new', nuevoProducto);
router.put('/products/edit', editarProducto);
router.delete('/products/delete', borrarProducto);


module.exports = router;