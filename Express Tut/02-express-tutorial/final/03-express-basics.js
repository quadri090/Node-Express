const express = require('express') //call express function
const app = express()  //invoke the express function application in a variable

app.get('/', (req, res) => {
  console.log('User hit the Home Page');
  res.status(200).send('Home Page')//res.status() sends the request status. while res.send sends the requested resource
})

app.get('/about', (req, res) => { //app.get gets the user requested resource. it is the default for most web pages
  console.log('User hit the About Page');
  res.status(200).send('About Page')
})

app.all('*', (req, res) => { //app.all is a response for when the user requested resource can not be found on the server
  console.log('User hit the Wrong Path');
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
