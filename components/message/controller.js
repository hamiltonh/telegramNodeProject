const store = require('./store')

function addMessage (chat, user, message){
    
    return new Promise ((resolve, reject)=>{
        
        if(!chat || !user || !message){
            console.error('[messageController] Error con el usuario o mensaje.');
            reject('Los datos son incorrectos!')
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
        }
        // console.log(fullMessage)
        store.add(fullMessage)
        resolve(fullMessage)
    })

}

function getMessages(filterChat){
     return new Promise((resolve, reject)=>{
       return resolve(store.list(filterChat))
     })
}

const updateMessage = (id, message) =>{

    return new Promise(async (resolve, reject) => {
        if(!id, !message){
            reject('Invalida data!')
        }
        const result = await store.update(id,message)
        resolve (result)
    });

}

const deleteMessage= (idMessage) => {
    if(!idMessage){
        return new Promise.reject('Error parametros de entrada.')
    }
    return store.del(idMessage)
}


module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}
