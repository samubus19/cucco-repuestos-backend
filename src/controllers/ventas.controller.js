const Producto = require('../models/Producto');
const Usuario  = require('../models/Usuario');
const Venta    = require('../models/Venta');

const ventasController = {};

ventasController.obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find();
        return res.status(200).json(ventas);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

ventasController.nuevaVenta    = async (req, res) => {
    try {
        const { id_usuario, id_productos } = req.body;
        const producto = await Producto.find({ _id : id_productos });

        // if(producto) {
        //     console.log(producto[0].precio_venta);
        // }

        const usuario  = await Usuario.find({ _id : id_usuario });
        // if(usuario) {
        //     console.log(usuario);
        // }

        const nuevaVenta = new Venta({
            cliente      : usuario[0],
            productos    : producto[0],
            precio_total : producto[0].precio_venta,
            cantidad     : 1
        });
        
        // console.log(nuevaVenta);
        await nuevaVenta.save();
    
        return res.status(200).json("Venta realizada correctamente");

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
}

module.exports = ventasController;