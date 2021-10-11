const productoController = {};

productoController.obtenerProductos = (req, res) => {
    return res.status(200).json(
    {
        productos : "obteniendo todos los productos"
    })
}


productoController.nuevoProducto = (req, res) => {
    return res.status(201).json(
    {
        mensaje : "producto creado correctamente"
    })
} 

productoController.editarProducto = (req, res) => {
    return res.status(200).json(
    {
        mensaje : "producto editado correctamente"
    })
} 

productoController.borrarProducto = (req, res) => {
    return res.status(200).json(
        {
            mensaje : "producto eliminado correctamente"
        })
} 


module.exports = productoController;

