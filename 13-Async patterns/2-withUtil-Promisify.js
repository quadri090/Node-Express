const { readFile, writeFile } = require('fs')

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start3 = async () => {
    try { //try tries to catch an error if there's one in the nested code
        const first = await readFilePromise('../content/first.txt', 'utf8')
        const second = await readFilePromise('../content/second.txt', 'utf8')
        await writeFilePromise(
            '../content/result-UTIL&PROMISIFY.txt', `THIS IS CREATED WITH NODE's BUILT IN UTIL AND PROMISIFY:\n${first}\n${second}`
        )
        console.log(`${first}\n${second}`)
    } catch (error) { 
        console.log(error)
    }
}
start3()