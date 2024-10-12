export const errorMessageHandler = (res, error, success, statusCode = 401) =>
   res.status(statusCode).json( {success: false, data: {
         message: error,
         statusCode: statusCode
      }});