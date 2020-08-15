class ServerError extends Error {
  constructor () {
    super('An internal error has ocurred')
    this.name = 'ServerError'
  }
}

module.exports = ServerError
