module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-tdd-js',
  tokenSecret: process.env.TOKEN_SECRET || 'secret'
}
