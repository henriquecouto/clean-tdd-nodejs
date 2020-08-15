const MissingParamError = require('./missim-param-error')
const UnauthorizedError = require('./unauthorized-error')

class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return { statusCode: 500 }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static success () {
    return { statusCode: 200 }
  }
}

module.exports = HttpResponse
