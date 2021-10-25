const productoController = {};
const Producto           = require('../models/Producto');
const fs                 = require('fs');

productoController.obtenerProductos = async (req, res) => {
    try {
        const peliculas = await Producto.find();
        return res.status(200).json(peliculas);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
 
}

productoController.obtenerProductoPorNombre = async (req, res) => {
    try {
        const producto = await Producto.find({'nombre': {'$regex': req.params.nombre , '$options': 'i'}});
        if(producto) {
            return res.status(200).json({ producto : producto });
        } else {
            return res.status(404).json({ mensaje : "No se ha encontrado el producto" })
        }

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
 
}

productoController.obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.find({_id : req.params.id});
        if(producto) {
            return res.status(200).json({ producto : producto });
        } else {
            return res.status(404).json({ mensaje : "No se ha encontrado el producto" });
        }

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
 
}

productoController.nuevoProducto = async (req, res) => {
    try {
        const {nombre, marca, descripcion, precio_compra, precio_venta, stock} = req.body;
        const nuevoProducto = new Producto({
            nombre        : nombre,
            marca         : marca,
            descripcion   : descripcion,
            precio_compra : precio_compra,
            precio_venta  : precio_venta, 
            stock         : stock,
        });
        fs.renameSync(req.file.path, req.file.path + '.' + req.file.originalname.split('.')[1])
        nuevoProducto.imagen = req.protocol + '://' + req.get('host') + '/img/' + req.file.filename + '.' + req.file.originalname.split('.')[1];
        await nuevoProducto.save();
        return res.status(201).json({ mensaje : "Producto agregado correctamente" });

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
} 

productoController.editarProducto = async (req, res) => {
    try {
        const {nombre, marca, precio_compra, precio_venta, stock, descripcion} = req.body;
        await Producto.findByIdAndUpdate(req.params.id, {
            nombre        : nombre, 
            marca         : marca,
            precio_compra : precio_compra,
            precio_venta  : precio_venta,
            stock         : stock,
            descripcion   : descripcion
        });
    
        return res.status(200).json("Producto editado correctamente");

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
} 

productoController.borrarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        return res.status(200).json({ mensaje : "Producto borrado correctamente" });

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
} 


module.exports = productoController;

