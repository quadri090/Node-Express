const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')//home page and api page navigation
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {//mapping through the products object
    const { id, name, image } = product // gets the currently needed key-value from the object instead of all the key-value in the object
    return { id, name, image } //returns the keys and their values
  })

  res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => { // "/:" is a placeholder for any extra path that may be passed after the initial path
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params//this gets the route parameter of the user request

  const singleProduct = products.find(
    (product) => product.id === Number(productID)//javascript .find method finds and lists a specified key from an object. 'Number' esures the recieved data type is converted to number as a number
  )
  if (!singleProduct) {//singleproduct consists of id's 1 through to 4, if the requested path that will be placed in the prouctID placeholder is not one of the numbers in singleproduct, error message is displayed on the users screen
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)//if the user provided productID param matches singleProduct, the particular product with the id is returned
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

//query parameter

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query// checks the search and limit parameters provided by the user
  let sortedProducts = [...products] //spread orperator creates a new instance of the products object and assigns them to the sortedProducts variable

  if (search) { //checks if user provided the search param then executes the code block
    sortedProducts = sortedProducts.filter((product) => { //filter method iterates through an array and returns a filtered copy with elements that meet a condition
      return product.name.startsWith(search) //the condition is if the value of any name key in the product object startsWith the user provided search param
    })
  }
  if (limit) { //checks if user provided the limit param which is a number from 1 to 4 as the id of our sortedProducts object is 1 through to 4, it then executes the code block
    sortedProducts = sortedProducts.slice(0, Number(limit))//slice method starts at index 0, end index in this instance is user provided limit in the query param
  }
  if (sortedProducts.length < 1) { //if the search and limit parameters do not match the data in the api, the below message is displayed on the screen
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)//displays sorted products if search or limit matches api data
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
