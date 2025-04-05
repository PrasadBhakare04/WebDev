class AppError extends Error {
    constructor(message, status) {
        super();
        this.name = err.message
        this.status = err.status;
    }
}

module.exports = AppError;