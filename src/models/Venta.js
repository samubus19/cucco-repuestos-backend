const {Schema, model} = require("mongoose");

const ProdcutoSchema = new Schema({
    cliente : {
        type     : String,
        required : true
    }, 
    productos: {
        type     : String,
        required : true
    }, 
    precio_total      : {
        type     : String,
        required : true
    },
    cantidad   : {
        type     : Number,
        required : true
    },
}, {
        timestamps : true
    });

module.exports = model("Venta", VentaSchema);