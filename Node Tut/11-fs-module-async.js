const { readFile, writeFile } = require('fs') //built in node file system in asynchronous mode

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf8',  (err, result) => {
        if (err) {
            console.log(err)
            return
    }
    const second = result;

    writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}` 
    ,(err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
        console.log(`${first} ${second}`)
    })
    })
})
//asynchronouusly writing file does not require the {flag: 'a'}. it naturally overides whatever is in the file if the file already exists.
