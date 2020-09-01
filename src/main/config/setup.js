const cors = require('../middlewares/cors')
const json = require('../middlewares/json-parser')

module.exports = app => {
  app.disable('x-powered-by')
  app.use(cors)
  app.use(json)
}
