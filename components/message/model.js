const mongoose = require('mongoose')
const { Schema } = mongoose

const schemaMessage = new Schema ({
    chat: {
        type: Schema.ObjectId,
        ref:'chat',
    },
    user: {
        type: Schema.ObjectId,
        // required: true,
        ref:'user',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
})

// module.exports = mongoose.model('message',schemaMessage)
const model = mongoose.model('message',schemaMessage)
module.exports = model