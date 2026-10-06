import jwt from "jsonwebtoken"



export async function authentication(req, res, next) {
    const {authorization} = req.headers
    if (!authorization || !authorization.startsWith("Bearer ")) {
        const err = new Error("I didn't receive the token.")
        err.status = 401
        next(err)
    }
    try {
        const token = authorization.split(" ")[1]
        const check = jwt.verify(token, process.env.SECRET_JWT)
        req.user = check
        next()
    } catch (error) {
        error.status = 401
        if (error.name == "JsonWebTokenError") {
            error.message = "Invalid token"
        }
        if (error.name == "TokenExpiredError") {
            error.message = "The token has expired. Please log in again."
        }
        next(error)
    }
}