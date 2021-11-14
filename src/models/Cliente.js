const {Schema, model} = require("mongoose");

const ClienteSchema = new Schema({
    nombre           : String,
    apellido         : String,
    tipo_dni         : String,
    documento        : String,
    fecha_nacimiento : String,
    pais             : String,
    provincia        : String,
    direccion        : String,
    nro_casa         : String,
    nro_telefono     : String,
    codigo_postal    : String
    }, {
    timestamps : true
});

module.exports = model("Cliente", ClienteSchema);