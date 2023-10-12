const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data recieved:\nuser: ${name}\nid: ${id}`)
})
customEmitter.on('response', () => {
    console.log(`\nSome other logic here`)
}) 

customEmitter.emit('response', 'Glory La La La', 1313)