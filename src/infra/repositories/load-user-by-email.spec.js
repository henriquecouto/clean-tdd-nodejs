const { MongoClient } = require('mongodb')

class LoadUseByEmailRepository {
  constructor (userModel) {
    this.userModel = userModel
  }

  async load (email) {
    const user = await this.userModel.findOne({ email })
    return user
  }
}

describe('LoadUseByEmail Repository', () => {
  let client
  let db

  beforeAll(async () => {
    client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    db = await client.db()
  })

  beforeEach(async () => {
    await db.collection('users').deleteMany()
  })

  afterAll(async () => {
    await client.close()
  })

  test('Should return null if no user is found', async () => {
    const userModel = db.collection('users')
    const sut = new LoadUseByEmailRepository(userModel)
    const user = await sut.load('invalid@mail.com')

    expect(user).toBeNull()
  })

  test('Should return user if user is found', async () => {
    const userModel = db.collection('users')
    await userModel.insertOne({ email: 'valid@mail.com' })
    const sut = new LoadUseByEmailRepository(userModel)
    const user = await sut.load('valid@mail.com')

    expect(user.email).toBe('valid@mail.com')
  })
})
