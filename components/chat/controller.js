const store = require('./store')

function addChat(users){
    // console.log(users)
    if(!users || !Array.isArray(users)){
        return Promise.reject('[chat.Controller] Error chat.')
    }
    const chat ={
        users //El nombre de la propiedad con el mismo nombre de la var
    }

    return store.add(chat)  
}

function getChats(userId){
    return store.list(userId)
}

module.exports = {
    addChat,
    getChats,
}