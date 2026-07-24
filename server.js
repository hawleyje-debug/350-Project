/**
 * Name: Jacob Hawley
 * File: server.js
 * Description: Practice 9 - Setting up a basic Express.js server with a custom GET API endpoint.
 */

// Import the express module so we can use its framework features
const express = require('express');

// Initialize our express application
const app = express();

// Define our port number where the server will listen for requests
const PORT = 3000;

// ==========================================================
// Custom GET Endpoint
// ==========================================================
// When a client sends a GET request to '/api/message', this route handles it 
// and sends back a structured JSON response.
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from your first Express API!' });
});

// ==========================================================
// Start the Server
// ==========================================================
// Tell the app to listen on port 3000 and log a confirmation message to the console
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Set up the port to use the environment variable provided by Render, or fallback to 3000 locally
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});