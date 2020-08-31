class LoadUseByEmailRepository {
  async load (email) {
    return null
  }
}

describe('LoadUseByEmail Repository', () => {
  test('Should return null if no user is found', async () => {
    const sut = new LoadUseByEmailRepository()
    const user = await sut.load('invalid@mail.com')

    expect(user).toBeNull()
  })
})
