const objMensaje = {
    error : '',
    body: ''
}

exports.success = function (req, res, mensaje, status ) {
    objMensaje.error = ''
    objMensaje.body = mensaje
    res.status(status||200).send (objMensaje)
}

exports.error = function (req, res, mensaje, status, details) {
    console.error('ERROR_DETAILS:',details)
    objMensaje.error = mensaje
    objMensaje.body = ''
    res.status(status||500).send (objMensaje)
}