const productoController = {};

productoController.getProductos = (req, res) => {
    var arreglo = [];
    for (let i = 0; i < 9999; i++) {
        arreglo.push(i);
    }
    return res.json(arreglo);
}


module.exports = productoController;

