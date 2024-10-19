let http = require('http');

// req > what we send to server(params,query,body)
// res > what we get from server
let server = http.createServer((req,res) => {
    res.write("Hii from nodejs server app code for test")
    res.end()
})

server.listen(8711)