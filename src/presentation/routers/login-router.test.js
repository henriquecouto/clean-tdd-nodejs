const LoginRouter = require('./login-router')
const MissingParamError = require('../helpers/missim-param-error')

const makeSut = () => {
  return new LoginRouter()
}

describe('Login Router', () => {
  test('Should return 400 if no email provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        password: '123'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})

describe('Login Router', () => {
  test('Should return 400 if no password provided', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        email: 'any@email.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
})

describe('Login Router', () => {
  test('Should return 500 if no httpRequest provided', () => {
    const sut = makeSut()

    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })
})

describe('Login Router', () => {
  test('Should return 500 if no httpRequest has no body', () => {
    const sut = makeSut()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
