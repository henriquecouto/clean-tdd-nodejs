class LoadUseByEmailRepository {
  constructor (userModel) {
    this.userModel = userModel
  }

  async load (email) {
    const user = await this.userModel.findOne({ email }, { projection: { password: 1 } })
    return user
  }
}

module.exports = LoadUseByEmailRepository
