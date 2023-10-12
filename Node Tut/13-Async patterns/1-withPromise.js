const { readFile } = require('fs') //gets the readfile from node internal module called file system(fs)

const getText = (path) => {
    return new Promise((resolve, reject) => { //promise nested in a callback function
        readFile(path, 'utf8', (err, data) => { //another callback nested in the promise
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
} //this is a way to read file using javascript promise which takes the resolve and reject parameters 



getText('../content/first.txt') //this call passes the specified file path to the getText function path parameter
.then((result) => console.log(result)) //then it console logs the result if the path is correct
.catch((err) => console.log(err)) //it catches and console logs the error if theres an error with the file path or the code base

//to get the first and second txt files, we have to duplicate the function with the two different paths as seen above and below this comment

getText('../content/second.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))


// a different approach to getting the same results from the specified files will be:

const start = async () => { //javascript async function
    try { //try tries to catch an error if there's one in the block, returns the result if theres no error
        const first = await getText('../content/first.txt') //this call passes the specified file path to the getText function path parameter
        const second = await getText('../content/second.txt')
        console.log(`${first}\n${second}`)
    } catch (error) { // catch block catches an error if there's one and prevents the app from breaking down
        console.log(error) //console logs the error caught in the catch block
    }
}
start()



//Below is an alternative and cleaner way to do all the above which includes reading and writing a file
//uses the read and write file from the node file system at the top of this file




//we can only read files with this, the write file method isnt available here