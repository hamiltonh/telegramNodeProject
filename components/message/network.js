const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

const multer = require('multer') //TX de archivos
const middlewareUpload = multer({
    dest: 'public/files'
})


//1.RUTA SOLO CON EXPRESS, SIN USAR ROUTER**
// Responde a todos los verbos, get, put, delete
// app.use('/', function(req, res){
//     res.send('Hola')
// })

//2. Con router, EXPRESS old versions
/*
const router = express.Router()
app.use(router)

router.get('/', function (req, res) {
    res.send('Hola utilizando el get con router!')
})

router.post('/', function (req, res) {
    res.send('Hola utilizando el POST con router!')
})
*/

//3. EXPRESS 2021, no es necesario referenciar ya a router de express
router.get('/', function(req, res){
    
    const filterMessage = req.query.chat||null

    controller.getMessages(filterMessage)
    .then((listMessages)=>{
        response.success(req, res, listMessages, 200)
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e)
    })
    
    // // console.log(req.headers)
    // res.header({
    //     "custom-header": "Valor personalizado como header"
    // })

    // res.send('Hola utilizando el get con router!')
    //Usando el recurso response importado
    // response.success(req, res, 'Respuesta GET desde la fn success exportada!')

})

router.post('/', middlewareUpload.single('file'), function(req, res){
// console.log(req)
    // res.send('Hola utilizando el POST con router!')
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage)=>{
        response.success(req, res, fullMessage, 201)
    }).catch((e)=>{
        response.error(req, res, 'Error de datos recibidos', 400, 'Detalles del error, para registrar en el LOG: '+e)
    })
    // if (req.query.error == 'SI'){
    //     response.error(req, res, 'Error simulado en el POST para mostrar al cliente!', 500, 'Detalles para el LOG de errores.')
    // } else{
    //     response.success(req, res, 'Hola utilizando el POST con router!!', 200)
    // }
})

router.patch('/:id', function (req, res){
    // console.log(req.params)
    // console.log(req.query)

    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=>{
        response.success(req, res, data, 200)
    })
    .catch(e=>{
        response.error(req, res, 'Error interno', 500, 'Detalles del error, para registrar en el LOG: '+e)
    })

    // res.send('ok')
})

//POST with async
// router.post('/', async (req, res) =>{

//     try{
//         const fullMessage = await controller.addMessage(req.body.user, req.body.message)
//         response.success(req, res, fullMessage, 201)
//     }catch(err){
//         response.error(req, res, 'Error de datos recibidos', 400, 'Detalles para el LOG de errores.')
//     }

// })

router.delete('/:idMessage', function(req, res){

    controller.deleteMessage(req.params.idMessage)
    .then(() =>{
        response.success(req, res,`Usuario eliminado, id: ${req.params.idMessage}` , 200)
    })
    .catch(e=>{
        response.error(req, res, 'Error de indentificador!', 400, 'Detalles para registrar en el LOG interno: '+e)
    })
    
});

module.exports = router;