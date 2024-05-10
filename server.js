// Create a simple server using the core ‘node:http’ module that can handle multiple
// concurrent requests. Each request should respond with a message after a random
// delay (simulating some asynchronous operation) without blocking the server.

// The server should be configured to handle CORS.
// Provide a GET route that when hit, returns information
// about the user’s CPU and OS (any information you’d like to return).

const http = require("node:http");
const os = require("os");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET") {
    const cpuInfo = {
      model: os.cpus(),
    };

    const osInfo = {
      platform: os.platform(),
      type: os.type(),
    };
    const simulateDelay = () => Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.end(JSON.stringify({ cpu: cpuInfo, os: osInfo }));
    }, simulateDelay());
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running and listening at http://${hostname}:${port}/`);
});
