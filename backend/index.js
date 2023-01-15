const express = require('express')
const connectToMongo = require('./db')

connectToMongo()
const app = express()
const port = 5000

app.use(express.json());

// Available Route
app.use('/api', require('./routes/CreateUser'));

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`example app listening on ${port}`)
})