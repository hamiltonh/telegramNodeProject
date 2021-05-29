const express = require('express')
const router = require('./network/routes')
var app = express()


//Ejemplos de usar json or urlenconded
app.use(express.json()); //modulo de BODY-PARSER ya viene incluido en express
// app.use(express.urlencoded({extended:false}));

// app.use(router)
router(app)

//Ruta estatica, abrirlo desde http://localhost:3000/app/
app.use('/app',express.static('public'))

app.listen(3000)
console.log('Escuchando en puerto 3000!')