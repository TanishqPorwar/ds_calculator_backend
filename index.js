const express = require('express')
const calcRouter = require('./routes/calculatorRoutes')

const app = express()
app.use(express.json())


app.use('/',calcRouter)

app.listen(3000, ()=>{
    console.log('listen on port 3000')
})

