const { MongoClient } = require('mongodb')

const mongoUri = 'mongodb+srv://qabreira:xxxxxxxx@cluster0.cylwtux.mongodb.net/markdb?retryWrites=true&w=majority'

const client = new MongoClient(mongoUri)

async function connect() {
    await client.connect()
    return client.db('markdb')
}

async function disconnect() {
    await client.disconnect
}

module.exports = { connect, disconnect }