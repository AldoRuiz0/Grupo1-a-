const Usuario = require('../models/usuario.model');
const Empresa = require('../models/empresa.model')
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');



function AdminDefault(req, res) {
    var modeloUsuario = new Usuario();
    Usuario.find({ email: "SuperAdmin@kinal.edu.gt", nombre: "SuperAdmin" }, (err, usuarioEncontrado) => {
        if (usuarioEncontrado.length > 0) {
            console.log({ mensaje: "ya fue creado el ADMIN" })
        } else {
            modeloUsuario.nombre = "SuperAdmin";
            modeloUsuario.email = "SuperAdmin@kinal.edu.gt";
            modeloUsuario.password = "123456";
            modeloUsuario.rol = "Admin";
            bcrypt.hash(modeloUsuario.password, null, null, (err, passwordEncryptada) => {
                modeloUsuario.password = passwordEncryptada
                modeloUsuario.save((err, usuarioGuardado) => {
                    if (err) console.log({ mensaje: 'error en la peticion ' })
                    if (!usuarioGuardado) console
                    .log({ mensaje: 'error al crear el ADMIIN ' })
                    console.log({ Usuario: usuarioGuardado })

                })
            })
        }
    })

}

function Login(req, res) {
    var parametros = req.body;

    Usuario.findOne({ email: parametros.email}, (err, usuarioencontrado) => {
        if (err) return res.status(500)
        .send({ mensaje: 'error en la peticion ' });
        if (usuarioencontrado) {
            bcrypt.compare(parametros.password, usuarioencontrado.password, (err, Verificaciondepasswor) => {
                if (Verificaciondepasswor) {
                    if(parametros.obtenerToken == 'true'){
                        return res.status(200)
                        .send({ token: jwt.crearToken(usuarioencontrado) })
                    } else {
                        usuarioencontrado.password = undefined;

                        return res.status(200)
                            .send({ usuario: usuarioencontrado })
                    }
                } else {
                    return res.status(500)
                    .send({ mensaje: 'su contraseña no es correcta' })
                }
            })

        } else {
            return res.status(500)
            .send({ mensaje: 'El usuario no pudo ser identificado owo' })
        }
    })
}

module.exports = {
    AdminDefault,
    Login
}