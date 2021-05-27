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

function getMessages(){
    return new Promise((resolve, reject)=>{
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessages
}