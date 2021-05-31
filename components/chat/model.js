const mongoose = require('mongoose')
const { Schema } = mongoose

const mySchema = new Schema ({
    users: [{
        type: Schema.ObjectId,
        ref:'user',
    }]
})

module.exports = mongoose.model('chat',mySchema)
