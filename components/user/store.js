const Model = require('./model')

function addUser(user) {
    // list.push(message)
    const myUser = new Model(user)
    return myUser.save()
}

// async function getUsers(filterUser){
    
//     let filter = {}
//     if(filterUser){
//         filter = { name:filterUser }
//     }
//     const users = await Model.find(filter)
    
//     return users
// }

function getUsers(filterName){
    
    let filter = {}
    if(filterName){
        filter = { name:filterName }
    }

    return Model.find(filter) //return a promise
}

// async function getMessages(filterUser){
//     // return list
//     let filter = {}
//     if(filterUser){
//         filter = {user:filterUser}
//     }
//     const messages = await Model.find(filter)
//     return messages
// }

// async function updateMessage(id, message){

//     const messageUpdated = await Model.findOneAndUpdate(
//         {_id:id}, //filter
//         {message}, //new data
//         { returnOriginal: false}
//     )
    
//     return messageUpdated
// }

module.exports = {
    add: addUser,
    list: getUsers
}