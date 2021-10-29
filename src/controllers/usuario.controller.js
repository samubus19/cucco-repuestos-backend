const usuarioController = {};
const Usuario           = require('../models/Usuario');
const jwt               = require('jsonwebtoken');
const {SECRET_KEY}      = process.env;

usuarioController.crearUsuario = async (req , res) => {
    const {usuario, contrasenia, email} = req.body;

    const nuevoUsuario = new Usuario({
        usuario     : usuario,
        contrasenia : contrasenia,
        email       : email
    });

    const nombreUsuario = await Usuario.findOne({ $or : [{usuario : usuario}, { email : email}] });
    if (nombreUsuario) {
        return res.json("Ya existe este usuario");

    } else {
        nuevoUsuario.contrasenia = await nuevoUsuario.encryptPassword(contrasenia);
        await nuevoUsuario.save();
        return res.status(201).json("Usuario creado correctamente");
    }
}


usuarioController.loginUsuario = async (req , res) => {
    const usuario = await Usuario.findOne({ usuario : req.body.usuario });
    if(!usuario) {
        return res.status(404).send("El usuario no existe");
    }
    const contraseniaValida = await usuario.matchPassword(req.body.contrasenia);
    if (!contraseniaValida) {
        return res.status(401).send({ auth: false, token: null, mensaje : "Contrasena invalida" });
    }

    const token = jwt.sign({ id: usuario._id }, SECRET_KEY, {
        expiresIn: '24h',
    });
    res.status(200).send({token:token});
}

usuarioController.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        return res.status(200).json(usuarios);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

module.exports = usuarioController;