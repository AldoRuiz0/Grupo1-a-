const express = require('express');
const sucursalesControlador = require('../controllers/sucursales.contoller');
const md_autenticacion = require('../middlewares/autentication');
const api = express.Router();


api.post('/agregarSucursal', md_autenticacion.Auth, sucursalesControlador.agregarSucursal);
api.put('/editarSucursal/:idSucursal', md_autenticacion.Auth, sucursalesControlador.editarSucursal);
api.get('/obtenerSucursales', md_autenticacion.Auth, sucursalesControlador.conseguirSucursal);
api.delete('/eliminarSucursales/:idSucursal', md_autenticacion.Auth, sucursalesControlador.BorrarSucursal); 
api.put('/agregarProductos/:idSucursal', md_autenticacion.Auth, sucursalesControlador.agregarProductos);
api.get('/obtenerProductos/:idSucursal', md_autenticacion.Auth, sucursalesControlador.obtenerProductos);



module.exports = api;