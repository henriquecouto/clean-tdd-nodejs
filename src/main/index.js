const MongoHelper = require('../infra/helpers/mongo-helper')
const app = require('./config/app')
const env = require('./config/env')

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    app.listen(3030, () => {
      console.log('🏁 Server running on port 3030!')
    })
  })
  .catch(console.error)
