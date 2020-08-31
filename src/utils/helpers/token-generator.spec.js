const jwt = require('jsonwebtoken')
const MissingParamError = require('../errors/missing-param-error')

class TokenGenerator {
  constructor (secret) {
    this.secret = secret
  }

  async generate (id) {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }
    return jwt.sign(id, this.secret)
  }
}

const makeSut = () => {
  const sut = new TokenGenerator('secret')
  return { sut }
}

describe('Token Generator', () => {
  test('Should return null if JWT returns null', async () => {
    const { sut } = makeSut()
    jwt.token = null
    const token = await sut.generate('any_id')
    expect(token).toBeNull()
  })

  test('Should return a token if JWT returns a token', async () => {
    const { sut } = makeSut()
    const token = await sut.generate('any_id')
    expect(token).toBe(jwt.token)
  })

  test('Should return a token if JWT returns a token', async () => {
    const { sut } = makeSut()
    await sut.generate('any_id')
    expect(jwt.id).toBe('any_id')
    expect(jwt.secret).toBe(sut.secret)
  })

  test('Should throw if no secret is provided', async () => {
    const sut = new TokenGenerator()
    const promise = sut.generate('any_id')
    expect(promise).rejects.toThrow(new MissingParamError('secret'))
  })
})
