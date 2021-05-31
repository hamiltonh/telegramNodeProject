const Model = require('./model')

function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

//ANtes de relacionado con usr
// async function getMessages(filterUser){
//     // return list
//     let filter = {}
//     if(filterUser){
//         filter = {user:filterUser}
//     }
//     const messages = await Model.find(filter)
//     return messages
// }

async function getMessages(filterUser){
    
    return new Promise((resolve, reject) => {
        let filter = {}
        if(filterUser !== null){
            filter = {user:filterUser}
        }
        Model.find(filter)
        .populate('user')
        .exec((error, populated)=>{
            if(error){
                reject(error)
            }
            resolve(populated)
        })
    })
}

async function updateMessage(id, message){

    const messageUpdated = await Model.findOneAndUpdate(
        {_id:id}, //filter
        {message}, //new data
        { returnOriginal: false}
    )
    
    return messageUpdated
}

function deleteMessage(idMessage){
    return Model.findOneAndDelete({
        _id: idMessage
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    del: deleteMessage
}