const express        = require('express');
const morgan         = require('morgan');
const cors           = require('cors');

//Initializations
const app  = express();
const path = require('path');

//Settings 
app.use(cors());
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//routes
app.use(require('./routes/producto.routes'));
app.use(require('./routes/ventas.routes'));
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/cliente.routes'));
app.use(require('./routes/datosfijos.routes'));
app.use(require('./routes/empresa.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;