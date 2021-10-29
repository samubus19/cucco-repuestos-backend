const {Schema, model}  = require("mongoose");
const Usuario          = require('../models/Usuario');
const Producto         = require('../models/Producto');

const VentaSchema = new Schema({
    id_usuario       : String,
    id_cliente       : String,
    productos    : [{
        producto     : Producto.schema,
        cantidad     : Number,
    }],
    precio_total : Number,
    }, {
        timestamps : true
    });

module.exports = model("Venta", VentaSchema);