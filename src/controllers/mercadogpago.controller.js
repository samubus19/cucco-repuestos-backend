const mpController = {};
// SDK de Mercado Pago
const mercadopago  = require ('mercadopago');

const { ACCESS_TOKEN } = process.env;

// Agrega credenciales
mercadopago.configure({
  access_token: ACCESS_TOKEN
});

  
mpController.comprarMercadopago = (req, res) => {

  let { usuario, cliente, producto } = req.body;

    usuario = JSON.parse(usuario)
    cliente = JSON.parse(cliente)
    producto = JSON.parse(producto)

    console.log(usuario)
    console.log(cliente)
    console.log(producto)

    let preference = {
        items                 : [
          {
            title       : producto.nombre,
            unit_price  : Number(producto.precio_venta),
            quantity    : 1,
            currency_id : "ARS",
            picture_url : "https://www.autofacil.es/wp-content/uploads/2021/05/embrague-del-coche.jpg",
            description : producto.descripcion,
            category_id : producto.categoria,
          }
        ],
        "back_urls": {
            "success"   : "localhost:3000/gracias",
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
              "street_number": 132,
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