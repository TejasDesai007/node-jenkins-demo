const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.end('Hello from Jenkins CI/CD Node.js App!');
};

const server = http.createServer(requestHandler);
server.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
