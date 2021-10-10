const {Schema, model} = require("mongoose");

const ProdcutoSchema = new Schema({
    nombre        : {
        type     : String,
        required : true
    },
    stock         : {
        type     : Number,
        required : true
    },
    descripcion   : {
        type     : String,
        required : true
    },
    precio_venta  : {
        type     : Number,
        required : true
    },
    precio_compra : {
        type     : Number,
        required : true
    },
    marca : {
        type     : String,
        required : true
    },
    
  }, {
    timestamps : true
});

module.exports = model("Producto", ProductoSchema);