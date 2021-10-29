const { Router }         = require('express');
const { cacheInit }      = require('../middlewares/cache');
const { verificarToken } = require('../middlewares/verificacion-jwt');
const { 
    agregarPaises,
    agregarCategorias,
    agregarPrivincias,
    obtenerCategorias,
    obtenerPaises,
    obtenerProvincias
 }  = require('../controllers/datosfijos.controller');

const router = Router();

router.get('/categories/all', verificarToken, cacheInit, obtenerCategorias);
router.post('/categories/new', agregarCategorias);

router.get('/countries/all' , verificarToken, cacheInit, obtenerPaises);
router.post('/countries/new', agregarPaises);

router.get('/provinces/all',  verificarToken, cacheInit, obtenerProvincias);
router.post('/provinces/new', agregarPrivincias);


module.exports = router;