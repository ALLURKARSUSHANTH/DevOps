const http = require("http");
const port = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.send(`<h2> Hello,I'm Practicing </h2> \n`);
});

server.listen(port,()=> console.log(`server running on port ${port}`));