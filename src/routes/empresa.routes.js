const { Router }         = require('express');
const { cacheInit }      = require('../middlewares/cache');
const { verificarToken } = require('../middlewares/verificacion-jwt'); 

const router             = Router();
const { 
    obtenerDatosEmpresa,
    insertarDatosEmpresa,
    editarDatosEmpresa
 } = require('../controllers/empresa.controller');


router.get('/cucco-repuestos/all', verificarToken , obtenerDatosEmpresa);
router.put('/cucco-repuestos', verificarToken, editarDatosEmpresa);
// router.post('/cucco-repuestos/', insertarDatosEmpresa)


module.exports = router;