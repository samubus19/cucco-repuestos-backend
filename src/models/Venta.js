const {Schema, model}  = require("mongoose");
const Usuario          = require('../models/Usuario');
const Producto         = require('../models/Producto');

const VentaSchema = new Schema({
    cliente      : Usuario.schema,
    productos    : [Producto.schema],
    precio_total : Number,
    cantidad     : Number,
    }, {
        timestamps : true
    });

module.exports = model("Venta", VentaSchema);