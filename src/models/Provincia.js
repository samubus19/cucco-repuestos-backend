const {Schema, model} = require("mongoose");

const ProvinciaSchema = new Schema({
    nombre  : String,
    id_pais : String
    }, {
    timestamps : true
});

module.exports = model("Provincia", ProvinciaSchema);