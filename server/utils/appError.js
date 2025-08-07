class AppError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constuctor)

    }
}
export default AppError