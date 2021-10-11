const express        = require('express');
const morgan         = require('morgan');
const cors           = require('cors');

//Initializations
const app  = express();

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


module.exports = app;