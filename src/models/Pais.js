const {Schema, model} = require("mongoose");

const PaisSchema = new Schema({
    nombre : String,
       }, {
    timestamps : true
});

module.exports = model("Pais", PaisSchema);