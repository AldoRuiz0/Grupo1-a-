const express = require('express');
const cors = require('cors');
var app = express();

const usuariosRoutes = require('./src/routes/usuario.router');
const empresasRoutes = require('./src/routes/empresa.router');
const sucursalesRoutes = require("./src/routes/sucursales.router")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/api', usuariosRoutes, empresasRoutes, sucursalesRoutes);


module.exports = app;