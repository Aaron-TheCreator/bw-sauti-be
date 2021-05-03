class ExpressError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code || 5000
    }
}

module.exports = ExpressError;