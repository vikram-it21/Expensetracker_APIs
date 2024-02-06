const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://joker:abc@cluster0.6szcfzy.mongodb.net/?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db("db1")
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}