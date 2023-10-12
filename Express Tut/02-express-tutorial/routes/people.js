const express = require('express')
const router = express.Router()

let { people } = require('../data')



router.get('/', (req, res) => { //get method is to get a resource from a server
    res.status(200).json({ success: true, data: people }) //sends the data object(as json file) back to the frontend based on the get request from axiios
})



router.post('/', (req, res) => {
    const {name} = req.body //name in the request body derives from the javascript.html file which is posting to server path /api.people. this name was set in the javascript.html axios post request as the key of the data passed in the post request
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please provide name value'})//sends an error response through the message key to the frontend
    }
    res.status(201).send({success: true, person: name}) //new person object is created and assigned the value of the name object sent from the frontend through axios post request which is gotten from the request body which we have access to as a result of using the the express.json() middleware
})



router.post('/postman', (req, res) => {
    const {name} = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please provide name value'})
    }
    res.status(201).send({success: true, data:[...people, name]}) 
})



router.put('/:id', (req, res) => { //the put method path in this instance requires the id of the data we are updating in the people object
    const {id} = req.params //gets the url id parameter
    const {name} = req.body //gets the name key in the request body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
        .status(400)
        .json({success: false, msg: `no person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).send({success: true, data: newPeople})

    console.log(id, name)
})


router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person) {
        return res
        .status(404)
        .json({success: false, msg: `no person with id ${req.params.id}`})
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
        return res.status(200).json({ success: true, data: newPeople })
})

module.exports = router