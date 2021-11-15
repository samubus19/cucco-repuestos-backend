const {Schema, model} = require("mongoose");

const EmpresaSchema = new Schema({
    nombre    : String,
    direccion : String,
    telefono  : String,
    email     : String,
    localidad : String,
    pais      : String,
    sitio_web : String
       }, {
    timestamps : true
});

module.exports = model("Empresa", EmpresaSchema);