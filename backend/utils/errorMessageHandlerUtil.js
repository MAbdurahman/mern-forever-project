export const errorMessageHandler = (res, error, success = false, statusCode = 401) =>
   res.status(statusCode).json({ message: error, success });