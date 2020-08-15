class UnauthorizedError extends Error {
  constructor (paramName) {
    super('Unauthorized access')
    this.name = 'UnauthorizedError'
  }
}

module.exports = UnauthorizedError
