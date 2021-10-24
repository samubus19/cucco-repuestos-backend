const {Schema, model} = require("mongoose");

const ClienteSchema = new Schema({
    nombre           : String,
    apellido         : String,
    tipo_dni         : String,
    documento        : String,
    fecha_nacimiento : Date,
    pais             : String,
    provincia        : String,
    direccion        : String,
    nro_casa         : String,
    nro_telefono     : String,
    }, {
    timestamps : true
});

module.exports = model("Cliente", ClienteSchema);