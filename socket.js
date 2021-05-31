const socketIO = require('socket.io')
const socket = {}

function connect(server){
    socket.io = socketIO(server)
    io = socket.io

    io.on('connection', (socket) => {
		console.log('New socket Connected...', socket.id)	
    })

    //no funciona
    io.on('disconnect', (message) => {
		console.log('Disconnected...')	
    })
}

module.exports ={
    connect,
    socket,
}