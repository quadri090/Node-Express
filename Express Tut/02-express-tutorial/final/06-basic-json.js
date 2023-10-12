const express = require('express')
const app = express()
const { products } = require('./data')// calling the products object from data.js directory
app.get('/', (req, res) => {
  res.json(products)//sends a response using json.stringify()
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
