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

ventasController.obtenerVentaPorId = async (req, res) => {
    try {
        const venta = await Venta.findById(req.params.id);
        return res.status(200).json(venta);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

ventasController.nuevaVenta    = async (req, res) => {
    try {
        const { id_usuario, id_productos, cantidad, id_cliente } = req.body;

        const productos = await Producto.find({ _id : id_productos });


        const nuevaVenta = new Venta({
            id_usuario   : id_usuario,
            id_cliente   : id_cliente,
            precio_total : 0,
        });

        for (let i = 0; i < productos.length; i++) {
            nuevaVenta.productos.push({ producto : productos[i], cantidad : Number(cantidad[i]) });
            nuevaVenta.precio_total += productos[i].precio_venta * cantidad[i];
            await Producto.findByIdAndUpdate(productos[i]['_id'], {
                stock : productos[i].stock - cantidad[i],
            });
        }
        
        await nuevaVenta.save();

        return res.status(200).json("Venta realizada correctamente");

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
}

module.exports = ventasController;