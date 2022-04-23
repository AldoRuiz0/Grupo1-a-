const express = require('express');
const empresaControlador = require('../controllers/empresa.controller');
const md_autenticacion = require('../middlewares/autentication');
const api = express.Router();

api.post('/agregarEmpresa', empresaControlador.agregarEmpresa);
api.put('/editarEmpresa/:idEmpresa', md_autenticacion.Auth, empresaControlador.editarEmpresa);
api.get('/obtenerEmpresas', empresaControlador.conseguirEmpresa);
api.delete('/eliminarEmpresa/:idEmpresa', md_autenticacion.Auth, empresaControlador.borrarEmpresa); 



module.exports = api;