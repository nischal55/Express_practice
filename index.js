const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/api/todos',(req,res)=>{
    res.send("This is abput")
})

app.post('/api/todos',(req,res)=>{
    res.send("Data Received successfully")
})

app.get('/api/products',(req,res)=>{
    res.send(JSON.stringify([{"productName": "Apple","price":20},{"productName": "Mango","price":40}]))
})
app.get('/api/products',(req,res)=>{
    res.send(JSON.stringify([{"productName": "Apple","price":20}]))
})
app.get('/api/products/:productId',(req,res)=>{
    console.log(req.params.productId)
    res.send(JSON.stringify([{"productName": "Apple","price":20}]))
})


app.listen(8000)