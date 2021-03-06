const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt')
const res = require('express/lib/response');
const Empresa = require('../models/empresa.model')
const Usuario = require('../models/usuario.model')

function agregarEmpresa(req, res) {
    const parametros = req.body;
    const modeloEmpresa = new Empresa();

    bcrypt.hash(parametros.password, null, null, (err, passwordEncryptada) => {

    modeloEmpresa.nombre = parametros.nombre;
    modeloEmpresa.direccion = parametros.direccion; 
    modeloEmpresa.descripcion = parametros.descripcion; 
    modeloEmpresa.rol = 'Empresa';   

        modeloEmpresa.password = passwordEncryptada
        modeloEmpresa.save((err, empresaGuardada)=>{
            if(err) return res.status(500)
                .send({mensaje: 'Hubo un error en la peticion'})
            if(!empresaGuardada) return res.status(500)
                .send({mensaje: 'Hubo un error al agregar la empresa'})
    
            return res.status(200)
                .send({empresa: empresaGuardada})
        })
    })
    
}

function borrarEmpresa(req, res) {
    const idEmpresa = req.params.idEmpresa;

    if (req.user.rol == 'Admin') {
        Empresa.findByIdAndDelete({ _id: idEmpresa }, (err, empresaEliminada) => {
            if (err) return res.status(500)
                .send({ mensaje: 'Hubo un error en la peticion' });
            if (!empresaEliminada) return res.status(500)
                .send({ mensaje: 'error al querer borrar esta empresa unu' });

            return res.status(200)
                .send({ empresa: empresaEliminada })
        })
    } else {
        return res.status(500).send({ mensaje: 'Solo los administradores pueden eliminar las empresas' })
    }

}

function conseguirEmpresa(req, res){

    Empresa.find({}, (err, empresaEncontradas) => {
        if (err) return res.status(500)
            .send({ mensaje: 'Hubo un error en la peticion' })
        if (!empresaEncontradas) return res.status(500)
            .send({ mensaje: 'no se pudo obtener la empresa uwu' })

        return res.status(200)
            .send({ empresa: empresaEncontradas })
    })
}

function editarEmpresa(req, res) {
    const parametros = req.body;
    const idEmpresa = req.params.idEmpresa;
    if (req.user.rol = 'Admin') {

        Empresa.findByIdAndUpdate(idEmpresa, parametros, { new: true }, (err, empresaActualizada) => {
            if (err) return res.status(500)
                .send({ mensaje: 'Hubo error en la peticion' });
            if (!empresaActualizada) res.status(500)
                .send({ mensaje: 'no se logra actualizar la empresa' })

            return res.status(200)
                .send({ empresa: empresaActualizada })
        })

    } else {
        return res.status(500)
        .send({ mensaje: 'Solamente los Admin pueden editar LAS EMPRESASZ' })
    }
}





module.exports = {
    agregarEmpresa,
    editarEmpresa,
    borrarEmpresa,
    conseguirEmpresa,
     
}