/**
 * Name: Jacob Hawley
 * File: server.js
 * Description: Practice 12 - Express server utilizing environment variables for dynamic responses.
 */

// Import the express module so we can use its framework features
const express = require('express');

// Initialize our express application
const app = express();

// Middleware to parse incoming JSON payloads for POST requests
app.use(express.json());

// Define our port number (uses Render's environment port when deployed, or 3000 locally)
const PORT = process.env.PORT || 3000;

// Grab the GREETING environment variable, or use a default local fallback message
const greeting = process.env.GREETING || 'Hello from your deployed app!';

// ==========================================================
// Custom GET Endpoint (Updated for Environment Variable)
// ==========================================================
app.get('/api/message', (req, res) => {
    res.json({ message: greeting });
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