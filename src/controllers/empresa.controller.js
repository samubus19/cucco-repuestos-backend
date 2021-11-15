const Empresa = require('../models/Empresa');

const empresaController = {};

empresaController.obtenerDatosEmpresa = async (req, res) => {
    try {
        const datosEmpresa = await Empresa.find();
        return res.status(200).json(datosEmpresa);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

empresaController.insertarDatosEmpresa = async (req, res) => {
    try {
        const { nombre, direccion, telefono, email, localidad, pais, sitio_web} = req.body;
        const nuevosDatosEmpresa = new Empresa({
            nombre        : nombre,
            direccion     : direccion,
            telefono      : telefono,
            email         : email,
            localidad     : localidad,
            pais          : pais,
            sitio_web     : sitio_web
        });
        await nuevosDatosEmpresa.save();
        return res.status(201).json({ mensaje : "Datos de la empresa insertados correctamente" }); 
    } catch(e) {
        return res.status(500).json(e);
    }
}

empresaController.editarDatosEmpresa = async (req, res) => {
    try {
        const { nombre, direccion, telefono, email, localidad, pais, sitio_web } = req.body;

        const empresa = await Empresa.findByIdAndUpdate('6192d7ab249e3f727f1d79c7', {
            nombre    : nombre,
            direccion : direccion,
            telefono  : telefono,
            email     : email,
            localidad : localidad,
            pais      : pais,
            sitio_web : sitio_web
        });
        return res.status(200).json("Datos de la empresa editados correctamante");

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

module.exports = empresaController;