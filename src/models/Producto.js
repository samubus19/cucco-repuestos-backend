const {Schema, model} = require("mongoose");

const ProductoSchema = new Schema({
    nombre        : String,
    stock         : Number,
    descripcion   : String,
    precio_venta  : Number,
    precio_compra : Number,
    marca         : String,
    }, {
    timestamps : true
});

module.exports = model("Producto", ProductoSchema);