const express = require('express')
const format = require('date-format')
const cors = require('cors');
const app = express()
// swagger docs 
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('swagger.yaml');

app.use(cors({
    origin : "*"
}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 4000 || process.env.PORT

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

app.listen(PORT,()=>{
    console.log(`Server is Running ar ${PORT}`)
})