const http=require('http')
const app=require('./app')

const {HOST = '127.0.0.1', PORT = 3000}=process.env


app.listen(PORT,HOST,()=>{
    
    console.log(`http://${HOST}:${PORT}`)
})

const server=http.createServer()