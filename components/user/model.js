const mongoose = require('mongoose')
const { Schema } = mongoose

const schemaUser = new Schema ({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('user',schemaUser)
