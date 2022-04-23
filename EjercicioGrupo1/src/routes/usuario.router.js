const express = require('express');
const usuarioControlador = require('../controllers/usuario.controller');
const md_autenticacion = require('../middlewares/autentication');

const api = express.Router();

api.post('/login', usuarioControlador.Login);

module.exports = api;