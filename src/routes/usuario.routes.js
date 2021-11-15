const { Router }        = require('express');
const { 
    crearUsuario,
    loginUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId
 } = require('../controllers/usuario.controller')

 const { verificarToken } = require('../middlewares/verificacion-jwt');
 
const router            = Router();

router.post('/user/signup', crearUsuario);
router.post('/user/login', loginUsuario);
router.get('/user/all', verificarToken, obtenerUsuarios)
router.get('/user/:id', verificarToken, obtenerUsuarioPorId)


module.exports = router;