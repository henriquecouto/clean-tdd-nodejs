const cors = require('../middlewares/cors')
const json = require('../middlewares/json-parser')
const contentType = require('../middlewares/content-type')

module.exports = app => {
  app.disable('x-powered-by')
  app.use(cors)
  app.use(json)
  app.use(contentType)
}
