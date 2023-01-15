const express = require('express')
const connectToMongo = require('./db')
connectToMongo()
const app = express();
const port = 5000

// middleware
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with ,Content-Type, Accept"
    );
    next();
})
app.use(express.json());

// Available Route
app.use('/api', require('./routes/CreateUser'));


app.listen(port,()=>{
    console.log(`example app listening on ${port}`)
})