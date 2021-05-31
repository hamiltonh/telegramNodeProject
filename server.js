// Ref: https://github.com/CodingCarlos/backend-node-platzi
const express = require('express')
const db = require('./db')
const router = require('./network/routes')
var app = express()
require('dotenv').config()

const URI = process.env.URI_DB
db(URI)

//Ejemplos de usar json or urlenconded
app.use(express.json()); //modulo de BODY-PARSER ya viene incluido en express
// app.use(express.urlencoded({extended:false}));

// app.use(router)
router(app)

//Ruta estatica, abrirlo desde http://localhost:3000/app/
app.use('/app',express.static('public'))

app.listen(3000)
console.log('Escuchando en puerto 3000!')