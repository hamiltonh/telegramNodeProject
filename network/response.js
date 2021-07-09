const objMensaje = {
    error : '',
    body: ''
}

const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
}

exports.success = function (req, res, mensaje, status=200 ) {
    objMensaje.error = ''
    objMensaje.body = message || statusMessages[status]
    res.status(status).send (objMensaje)
}

exports.error = function (req, res, mensaje, status=500, details) {
    console.error('ERROR_DETAILS:',details)
    objMensaje.error = message || statusMessages[status]
    objMensaje.body = ''
    res.status(status).send (objMensaje)
}