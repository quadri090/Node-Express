const http = require('http'); //imports node http module

const server = http.createServer((req, res)=>{ //creates webserver
    if (req.url === '/') { //checks the url of the current request
        res.write('This is the home page of a dummy website for testing request response cycle in node web server'); //set response content
        res.end();
    }
    else if (req.url === '/about') {
        res.write('This is a brief history about dummy website');
        res.end();
    }
    else {
        res.end(`
        <h1> Oops! </h1>
        <p> Page not found </p>
        <a href="/"> Go home <a/>
        `);
    }
})

server.listen(5000, () => {
    console.log('Nodejs server at port 5000 is running')
}) //listens for incoming requests



