const {Schema, model} = require("mongoose");
const { Producto }    = require('../models/Producto');
const { Usuario }     = require('../models/Usuario');

const VentaSchema = new Schema({
    cliente      : Usuario,
    productos    : [Producto], 
    precio_total : String,
    cantidad     : Number,
    }, {
        timestamps : true
    });

module.exports = model("Venta", VentaSchema);