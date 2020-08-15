class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized access')
    this.name = 'UnauthorizedError'
  }
}

module.exports = UnauthorizedError
