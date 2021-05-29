const mongoose = require('mongoose')
const { Schema } = mongoose

const schemaMessage = new Schema ({
    user: {
        type: String,
        require: true
    },
    message: String,
    date: Date
})

// module.exports = mongoose.model('message',schemaMessage)
const model = mongoose.model('message',schemaMessage)
module.exports = model