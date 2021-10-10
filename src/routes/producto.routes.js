const { Router }       = require('express');
const { getProductos } = require('../controllers/producto.controller');
const { cacheInit }        = require('../middlewares/cache');

const router = Router();

router.get('/products/all', cacheInit,  getProductos);
// router.post('/products/new');
// router.put('/products/edit');
// router.delete('/products/delete');


module.exports = router;