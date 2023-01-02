const express = require('express')
const format = require('date-format')
const app = express()

const PORT = 4000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is Running ar ${PORT}`)
})

app.get('/',(req, res)=>{
    res.status(200).send('<h1>Hello World!</h1>')
})
app.get('/api/v1/instagram',(req,res)=>{
    const instasocial = {
          username :"sangrambehera22",
          follwers:66,
          follows :22,
          date:format('hh:mm:ss', new Date())
    }
    res.status(200).send([instasocial])
})
app.get('/api/v1/facebook',(req,res)=>{
    const instasocial = {
          username :"sangrambehera22",
          follwers:100,
          follows :22,
          date:format('hh:mm:ss', new Date())
    }
    res.status(200).send([instasocial])
})
app.get('/api/v1/linkedin',(req,res)=>{
    const instasocial = {
          username :"Sangram Behera",
          follwers:672,
          follows :672,
          date:format('hh:mm:ss', new Date())
    }
    res.status(200).send([instasocial])
})