const MongoHelper = require('../helpers/mongo-helper')
const MissingParamError = require('../../utils/errors/missing-param-error')
const UpdateAccessTokenRepository = require('./update-access-token-repository')
let db

const makeSut = () => {
  const sut = new UpdateAccessTokenRepository()
  return { sut }
}

describe('UpdateAccessToken Repository', () => {
  let fakeUserId
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
    db = await MongoHelper.getDB()
  })

  beforeEach(async () => {
    const userModel = db.collection('users')
    await userModel.deleteMany()
    const fakeUser = await userModel.insertOne({ email: 'valid@mail.com' })
    fakeUserId = fakeUser.ops[0]._id
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should update the user with the given accessToken', async () => {
    const { sut } = makeSut()

    await sut.update(fakeUserId, 'valid_token')
    const updatedFakeUser = await db.collection('users').findOne({ _id: fakeUserId })
    expect(updatedFakeUser.accessToken).toBe('valid_token')
  })

  test('Should throw if no params are provided', async () => {
    const { sut } = makeSut()

    expect(sut.update()).rejects.toThrow(new MissingParamError('userId'))
    expect(sut.update(fakeUserId)).rejects.toThrow(new MissingParamError('accessToken'))
  })
})
