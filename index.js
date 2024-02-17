const express = require('express')
const app = express()
const auth = require('./middleware/auth')
const {checkAuthentication,checkValidation}=auth
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world")
})


let todos =[]
app.get('/api/todos',(req,res)=>{
    res.send(todos)
})

app.post('/api/todos',checkAuthentication,checkValidation,(req,res)=>{
    if(req.body.title==""){
        res.status(400).send("Invalid Data")
    }else{
        todos.push(req.body.title)
        res.send(todos)
    }
})
app.delete('/api/todos',checkAuthentication,checkValidation,(req,res)=>{
    todos=[]
    res.send(todos)
})


app.listen(8000)