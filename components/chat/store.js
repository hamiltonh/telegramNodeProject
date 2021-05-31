const Model = require('./model')

function addChat(users) {
    const myChat = new Model(users)
    return myChat.save()
}

async function getChats(userId){
    
    return new Promise((resolve, reject) => {
        let filter = {}
        if(userId){
            filter = { users: userId }
        }
        
        Model.find(filter)
        .populate('users')
        .exec((error, populated)=>{
            if(error){
                reject(error)
            }
            resolve(populated)
        })
    })
}

module.exports = {
    add: addChat,
    list: getChats
}