/**
 * Handler to default **server success response**.
 *
 * with structure `{error, status, body}`
 *
 * @param req the request info
 * @param res the response of the server
 * @param message the message of the server
 * @param status the response status code
 */
function success(req: any, res: any, message: any = "", status: any = 200) {
  res.status(status).send({
    error: false,
    status: status,
    body: message,
  });
}

/**
 * Handler to default **server error response**.
 *
 * with structure `{error, status, body}`
 *
 * @param req the request info
 * @param res the response of the server
 * @param message the message of the server
 * @param status the response status code
 */
function error(
  req: any,
  res: any,
  message: any = "Error interno del servidor",
  status: any = 500
) {
  res.status(status).send({
    error: true,
    status: status,
    body: message,
  });
}

export default { success, error };
