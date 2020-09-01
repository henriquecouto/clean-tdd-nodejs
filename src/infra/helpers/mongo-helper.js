const { MongoClient } = require('mongodb')

module.exports = {
  async connect (uri, name) {
    this.uri = uri
    this.name = name
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.db = this.client.db(name)
  },

  async disconnect () {
    this.client.close()
  },

  async getDB () {
    if (!this.client.isConnected()) {
      await this.connect(this.uri, this.name)
    }
    return this.db
  }
}
