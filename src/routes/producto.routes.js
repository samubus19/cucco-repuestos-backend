const { Router }         = require('express');
const { cacheInit }      = require('../middlewares/cache');
const { verificarToken } = require('../middlewares/verificacion-jwt');
const multer             = require('multer');

const upload             = multer({ dest : 'src/public/img'});

const { 
    obtenerProductos,
    editarProducto,
    borrarProducto,
    nuevoProducto,
    obtenerProductoPorNombre,
    obtenerProductoPorId
    } = require('../controllers/producto.controller');

const router = Router();

router.get('/products/all', cacheInit,  obtenerProductos);
router.get('/products/search/:nombre', cacheInit,  obtenerProductoPorNombre);
router.get('/products/search/:id', cacheInit, obtenerProductoPorId);
router.post('/products/new', verificarToken, upload.single('imagen'), nuevoProducto);
router.put('/products/edit/:id', verificarToken, editarProducto);
router.delete('/products/delete/:id', verificarToken, borrarProducto);
// router.get('/products/all', cacheInit,  obtenerProductos);
// router.get('/products/search/:nombre', cacheInit,  obtenerProductoPorNombre);
// router.get('/products/search/:id', cacheInit, obtenerProductoPorId);
// router.post('/products/new', nuevoProducto);
// router.put('/products/edit/:id', editarProducto);
// router.delete('/products/delete/:id', borrarProducto);


module.exports = router;