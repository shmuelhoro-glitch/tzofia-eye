


export async function errorHandler(err, req, res, next) {
    const message = err.message || "Internal Server Error"
    const status = err.status || 500
    res.status(status).send({success: false, message: message})
}