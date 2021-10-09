const {Schema, model} = require("mongoose");
const bcrypt          = require("bcrypt");

const UsuarioSchema = new Schema({
    usuario        : {
        type     : String,
        required : true
    },
    email          : {
        type     : String,
        required : true
    },
    contrasenia    : {
        type     : String,
        required : true
    },
    rol            : {
        type     : String,
        required : true
    },
}, {
    timestamps : true
});

UsuarioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
} 

UsuarioSchema.methods.matchPassword = async function (password)  {
    return await bcrypt.compare(password, this.contrasenia);
}

module.exports = model("Usuario", UsuarioSchema);