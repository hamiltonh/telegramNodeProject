const db = require('mongoose')

// const URI = 'mongodb://localhost/mevn-learning-words2'
db.Promise = global.Promise

function connectToDB(URI){
//En la clase, esta funcion la implementan como async, porque la conexion esta sin el then y catch
    db.connect( URI, { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false  })// add WARNINGS
    .then(db => console.log('DB conectada!'))
    .catch(err => console.log(err))

}

module.exports = connectToDB //Exportamos connectToDB x defecto.
