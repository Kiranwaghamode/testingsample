const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000


const products = [
    {
      "id": "001",
      "name": "Smartphone",
      "brand": "Samsung",
      "price": 599.99,
      "color": "Black",
      "availability": true
    },
    {
      "id": "002",
      "name": "Laptop",
      "brand": "Apple",
      "price": 1299.99,
      "color": "Space Gray",
      "availability": false
    },
    {
      "id": "003",
      "name": "Headphones",
      "brand": "Sony",
      "price": 199.99,
      "color": "White",
      "availability": true
    },
    {
      "id": "004",
      "name": "Smartwatch",
      "brand": "Fitbit",
      "price": 149.99,
      "color": "Black",
      "availability": true
    },
    {
      "id": "005",
      "name": "Camera",
      "brand": "Canon",
      "price": 799.99,
      "color": "Black",
      "availability": true
    }
  ]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res)=>{
    res.send("hello kiran waghamode")
})
app.get('/api', (req, res)=>{
    res.json(products)
})

app.get('/kiran', (req, res)=>{
    res.send("kiran is good boy")
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})