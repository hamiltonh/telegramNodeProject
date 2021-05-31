const express = require('express')
const response = require('../../network/response')
const store = require('../message/store')
const controller = require('./controller')
const router = express.Router()

router.post('/', function(req, res){

    controller.addUser(req.body.name)
    
    .then((data)=>{
        response.success(req, res, data, 201)
    }).catch((e)=>{
        response.error(req, res, 'Error de datos recibidos', 400, 'Detalles del error, para registrar en el LOG: '+e)
    })
})

router.get('/', function(req, res){

    const filter = req.query.name || null
    controller.getUsers(filter)
    .then((data)=>{
        response.success(req, res, data, 200)
    })
    .catch(e=>{
        response.error(req, res,  'Error Interno', 400, 'Detalles del error, para registrar en el LOG: '+e)
    })
})

module.exports = router