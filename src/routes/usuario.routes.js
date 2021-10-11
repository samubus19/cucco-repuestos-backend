const { Router }        = require('express');
const { 
    crearUsuario,
    loginUsuario
 } = require('../controllers/usuario.controller')
 
const router            = Router();

router.post('/user/signup', crearUsuario);
router.post('/user/login', loginUsuario);


module.exports = router;