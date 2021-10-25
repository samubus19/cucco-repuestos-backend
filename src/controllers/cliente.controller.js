const clienteController = {};
const Cliente           = require('../models/Cliente');

clienteController.crearCliente = async (req , res) => {
    try {
        const {nombre, apellido, tipo_dni, documento, fecha_nacimiento, pais, provincia, direccion, nro_casa, nro_telefono} = req.body;
        const nuevoCliente = new Cliente({
            nombre           : nombre,
            apellido         : apellido,
            tipo_dni         : tipo_dni,
            documento        : documento,
            fecha_nacimiento : fecha_nacimiento, 
            pais             : pais,
            provincia        : provincia,
            direccion        : direccion,
            nro_casa         : nro_casa,
            nro_telefono     : nro_telefono
        });
        await nuevoCliente.save();
        return res.status(201).json({ mensaje : "Cliente agregado correctamente" });

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
}


clienteController.obtenerClientes = async (req , res) => {
    try {
        const clientes = await Cliente.find();
        return res.status(200).json({
            clientes : clientes});

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}
module.exports = clienteController;