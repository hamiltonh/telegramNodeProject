const store = require('./store')

function addMessage (user, message){
    
    return new Promise ((resolve, reject)=>{
        
        if(!user || !message){
            console.error('[messageController] Error con el usuario o mensaje.');
            reject('Los datos son incorrectos!')
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        // console.log(fullMessage)
        store.add(fullMessage)
        resolve(fullMessage)
    })

}

function getMessages(filterUser){
    return new Promise((resolve, reject)=>{
        resolve(store.list(filterUser))
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


module.exports = {
    addMessage,
    getMessages,
    updateMessage
}
