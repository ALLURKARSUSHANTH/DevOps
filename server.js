const http = require("http");
const port = 8082;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h2>Hello, I'm Practicing</h2>\n`);
});

server.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
