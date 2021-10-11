const ventasController = {};

ventasController.obtenerVentas = (req, res) => {
    return res.status(200).json(
    {
        ventas : "obteniendo datos de ventas"
    })
}

ventasController.nuevaVenta    = (req, res) => {
    return res.status(201).json(
    {
        mensaje : "venta realizada exitosamente"
    })
}

module.exports = ventasController;