const db = require('mongoose')
const Model = require('./model')
require('dotenv').config()

// const URI = 'mongodb://localhost/mevn-learning-words2'
const URI = process.env.URI_DB

db.Promise = global.Promise
db.connect( URI,
            { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false  }
)// add WARNINGS
.then(db => console.log('DB conectada!'))
.catch(err => console.log(err))

function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filterUser){
    // return list
    let filter = {}
    if(filterUser){
        filter = {user:filterUser}
    }
    const messages = await Model.find(filter)
    return messages
}

async function updateMessage(id, message){

    const messageUpdated = await Model.findOneAndUpdate(
        {_id:id}, //filter
        {message}, //new data
        { returnOriginal: false}
    )
    
    return messageUpdated
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage
}