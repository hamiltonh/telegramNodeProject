// Ref: https://github.com/CodingCarlos/backend-node-platzi
const express = require('express')
const app = express()

//Ajustes para socket io
const server = require('http').Server(app)
const cors = require('cors')

const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')
require('dotenv').config()

const URI = process.env.URI_DB
db(URI)

app.use(cors())
app.use(express.json()); //modulo de BODY-PARSER ya viene incluido en express
app.use(express.urlencoded({extended:false}))


// app.use(router)

//implementando socket
socket.connect(server)
router(app)

//Ruta estatica, abrirlo desde http://localhost:3000/app/
app.use('/app',express.static('public'))

// app.listen(3000)
// for socketio
server.listen(3000, function (){
    console.log('Escuchando en puerto 3000!')
})
