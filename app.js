const { readFile } = require('fs') //gets the readfile from node internal module called file system(fs)

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))

// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const altSyntax = require('./6-alternativeSyntax')


// require('./7-mindGrenade')
// console.log(altSyntax)
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)