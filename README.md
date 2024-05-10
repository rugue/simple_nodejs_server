## Simple NodeJs Server

This repository provides a simple Node.js server that can handle multiple concurrent requests and returns information about the user's CPU and OS.

### Features:

- Uses the node:http module for server creation.
- Handles CORS (Cross-Origin Resource Sharing) to allow requests from any origin.
- Provides a GET route that responds with system information in JSON format after a simulated asynchronous delay.

### Retrieves information about:

- CPU model (using os.cpus())
- OS platform (using os.platform())
- OS type (using os.type())

### Running the Server:

- The server simulates an asynchronous operation by introducing a random delay using setTimeout.
- The delay is set between 1 and 4 seconds.
- The CORS settings allow requests from any origin.
