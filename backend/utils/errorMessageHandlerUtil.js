export const errorMessageHandler = (res, error, success, statusCode = 401) =>
   res.status(statusCode).json({ message: error, success: false });