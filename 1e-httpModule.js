const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to the Home page')
        return
    }
    if (req.url === '/about'){
        res.end('This is the about page')
        return
    }
    res.end(`
    <h1>Oops</h1>
    <p>We cannot find your page</p>
    <a href="/">Home Page</a>
    `)
})

server.listen(5000)