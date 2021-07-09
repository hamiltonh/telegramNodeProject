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

// app.use('/js',express.static('public/js'))// add para solucionar error
// app.use('/css',express.static('public/css'))// add para solucionar error



// app.listen(3000)
// for socketio
server.listen(process.env.PORT_DEV, function (){
    console.log('Escuchando en puerto:', process.env.PORT_DEV)
})




/*
Leyendo los comentarios y resumiendo la información faltante:

Descargar la carpeta que está en Archivos y enlaces
Descomprimir
Por consola entrar a esa carpeta
ejecutar:
npm install
npm run serve
npm run serve --fix
npm run build
Debería crear una carpeta dist, entrar y copiar los archivos
Pegarlos en la carpeta public de nuestro proyecto
Listo!
nodemon server

*/