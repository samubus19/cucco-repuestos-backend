const {Schema, model} = require("mongoose");

const CategoriaSchema = new Schema({
    nombre : String,
     }, {
    timestamps : true
});

module.exports = model("Categoria", CategoriaSchema);