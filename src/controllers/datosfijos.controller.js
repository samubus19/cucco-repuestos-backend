const datosfijosController = {};
const Categoria            = require('../models/Categoria');
const Pais                 = require('../models/Pais');
const Provincia            = require('../models/Provincia');

datosfijosController.agregarCategorias = async (req , res) => {
    
    try {        

        const categorias = [
            'Rectificados de campanas',
            'Cintas de freno',
            'Discos de freno',
            'Volantes de motor',
            'Embragues',
        ];

        for(categoria of categorias) {
            const nuevaCategoria = new Categoria({
                nombre : categoria
            })

            await nuevaCategoria.save()
        }
        return res.status(201).json({ mensaje : "Categorias agregadas correctamente" });

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
}


datosfijosController.obtenerCategorias = async (req , res) => {
    try {
        const categorias = await Categoria.find();
        return res.status(200).json(categorias);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

datosfijosController.agregarPaises = async (req , res) => {
    
    try {        

        const nuevoPais = new Pais({nombre : 'Argentina'})

        await nuevoPais.save()
        return res.status(201).json({ mensaje : "Paises agregadas correctamente" });

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
}

datosfijosController.obtenerPaises = async (req , res) => {
    try {
        const paises = await Pais.find();
        return res.status(200).json(paises);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

datosfijosController.agregarPrivincias = async (req , res) => {
    
    try {        
        const provincias = [
            'Entre Ríos',
            'Bueno Aires',
            'Catamarca',
            'Chaco',
            'Chubut',
            'Córdoba',
            'Corrientes',
            'Formosa',
            'Jujuy',
            'La Pampa',
            'La Rioja',
            'Mendoza',
            'Misiones',
            'Neuquén',
            'Río Negro',
            'Salta',
            'San Juan',
            'Santa Cruz',
            'Santa Fe',
            'Santiago del Estero',
            'Tierra del Fuego',
            'Tucumán'
        ]
        for(provincia of provincias) {
            const nuevaProvincia = new Provincia({
                nombre  : provincia,
                id_pais : '617c1291e67e99e96b0e71b7'
            })
            await nuevaProvincia.save()
        }

        return res.status(201).json({ mensaje : "Provincias agregadas correctamente" });

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" })
    }
}

datosfijosController.obtenerProvincias = async (req , res) => {
    try {
        const provincias = await Provincia.find();
        return res.status(200).json(provincias);

    } catch(e) {
        console.log(e);
        return res.status(500).json({ mensaje : "Ha ocurrido un error" });
    }
}

module.exports = datosfijosController;