const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res)=>{
    res.send("hello kiran waghamode")
})

app.get('/kiran', (req, res)=>{
    res.send("kiran is good boy")
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})