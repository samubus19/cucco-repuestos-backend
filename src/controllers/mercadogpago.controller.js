const mpController = {};
// SDK de Mercado Pago
const mercadopago  = require ('mercadopago');

const { ACCESS_TOKEN } = process.env;

// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN
});

  
mpController.comprarMercadopago = (req, res) => {

  const { usuario, cliente, producto } = req.body;

    let preference = {
        items                 : [
          {
            title       : producto.nombre,
            unit_price  : producto.precio,
            quantity    : 1,
            currency_id : "ARS",
            picture_url : producto.imagen,
            description : producto.descripcion,
            category_id : producto.categoria,
          }
        ],
        "back_urls": {
            "success"   : "localhost:3000/products/all",
            "failure"   : "localhost:3000/products/all",
            "pending"   : "localhost:3000/products/all"
        },
        payer : {
          "name": cliente.nombre,
          "surname": cliente.apellido,
          "email": usuario.email,
          "identification": {
              "type": "DNI",
              "number": cliente.documento
          },
          "address": {
              "street_name": cliente.direccion,
              "street_number": cliente.nro_casa,
              "zip_code": cliente.codigo_postal
          }
        },
        "auto_return"          : "approved",
        "statement_descriptor" : "Cucco-repuestos",
      };
      
      mercadopago.preferences.create(preference)
      .then(function(response){
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        // global.id = response.body.id;
        // window.location.href = response.body.init_point;
        // res.redirect(response.body.init_point);
        console.log(response);
        return res.json(response);
      }).catch(function(error){
        console.log(error);
      });
};

module.exports = mpController