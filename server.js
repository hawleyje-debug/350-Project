/**
 * Name: Jacob Hawley
 * File: server.js
 * Description: Practice 9 & 10 - Express server with GET and POST endpoints, configured for cloud deployment.
 */

// Import the express module so we can use its framework features
const express = require('express');

// Initialize our express application
const app = express();

// Middleware to parse incoming JSON payloads for POST requests
app.use(express.json());

// Define our port number (uses Render's environment port when deployed, or 3000 locally)
const PORT = process.env.PORT || 3000;

// ==========================================================
// Custom GET Endpoint
// ==========================================================
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from your first Express API!' });
});

// ==========================================================
// Custom POST Endpoint (from Practice 10)
// ==========================================================
app.post('/api/notes', (req, res) => {
    const { name, note } = req.body;
    
    if (!name || !note) {
        return res.status(400).json({ error: 'Both name and note are required.' });
    }
    
    res.status(201).json({ message: 'Note received!', data: { name, note } });
});

// ==========================================================
// Start the Server
// ==========================================================
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});