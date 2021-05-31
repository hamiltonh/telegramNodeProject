const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', function(req, res){
    // console.log(req.body)
    controller.addChat(req.body.users)
    
    .then((data)=>{
        response.success(req, res, data, 201)
    }).catch((e)=>{
        response.error(req, res, 'Error de datos recibidos', 400, 'Detalles del error, para registrar en el LOG: '+e)
    })
})

router.get('/:userId', function(req, res){
  
    const filterUserId = req.params.userId||null

    controller.getChats(filterUserId)
    .then((list)=>{
        response.success(req, res, list, 200)
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e)
    })

})

module.exports = router