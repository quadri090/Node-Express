const express = require('express') 
const router = express.Router() 

router.post('/', (req,res) => { //post method using the path defined in the index.html form method imported from ./methods-public
    const {name} = req.body //theres a body object in a post request. the name variable derives from the key passed onto the input element name attribute in index.html, while its value is the user input value which the urlencoded middleware allows us to access
    if (name) {
        return res.status(200).send(`Welcome aboard ${name} :)`)
    }
    res.status(401).send('Please provide credentials')
})

module.exports = router