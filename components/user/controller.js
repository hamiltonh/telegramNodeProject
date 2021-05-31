const store = require('./store')

//***Este metodo esta implementado diff en el componente message, en lo que se refiere al manejo de lapromesa, otra forma de hacerlo.
function addUser(name){
    if(!name){
        return Promise.reject('[user.Controller] Error con el usuario.')
    }
    const user ={
        name //El nombre de la propiedad con el mismo nombre de la var
    }
    user.name = name
    return store.add(user)  
    // como store.add devuelve un promesa, en el reject, tambien debo devolver una promesa. 
    // En el comp message se hizo diff
}

// @author: Hamiltonh
// segun parece no es necesaria crear una nueva promesa con new Promise, como se hizo en Message
function getUsers(filterName){
    //Al parecer no es necesario el try catch, porque el network recibe la promesa con el then catch, promesa creada desde el store
    // try {
        return store.list(filterName)
    // } catch (error) {
    //     return Promise.reject('[user.Controller] Unexpected Error: ' + error)
    // }
}

// function addMessage (user, message){
    
//     return new Promise ((resolve, reject)=>{
        
//         if(!user || !message){
//             console.error('[messageController] Error con el usuario o mensaje.');
//             reject('Los datos son incorrectos!')
//         }
//         const fullMessage = {
//             user: user,
//             message: message,
//             date: new Date(),
//         }
//         // console.log(fullMessage)
//         store.add(fullMessage)
//         resolve(fullMessage)
//     })
// }

// function getMessages(filterUser){
//     return new Promise((resolve, reject)=>{
//         resolve(store.list(filterUser))
//     })
// }

// const updateMessage = (id, message) =>{

//     return new Promise(async (resolve, reject) => {
//         if(!id, !message){
//             reject('Invalida data!')
//         }
//         const result = await store.update(id,message)
//         resolve (result)
//     });

// }


module.exports = {
    addUser,
    getUsers,
}
