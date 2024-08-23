class ApiError extends Error {
    constructor(
        statusCode,
        message = 'Something went wrong',
        error = [],
        stack = ''
    ) {
        super(message);
        this.statusCode = statusCode || 400;
        this.data = null;
        this.error = error;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
