const http = require('http')
const app = require('./app')
const { openConnection } = require('./services/mongo/mongo-connection')
const { PORT = 3000, MONGO_DB_URL ='mongodb://127.0.0.1:27017'} = process.env

const serverUrl = MONGO_DB_URL

openConnection(serverUrl).then(_ => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}).catch(error => {
    console.log(error);
    console.log('cannot connect to mongo server');


})

