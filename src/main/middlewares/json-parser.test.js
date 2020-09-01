const request = require('supertest')
const app = require('../config/app')

describe('JSON Parser Middleware', () => {
  test('Should parse Body as JSON', async () => {
    app.post('/test-json-parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test-json-parser')
      .send({ name: 'Henrique Couto' })
      .expect({ name: 'Henrique Couto' })
  })
})
