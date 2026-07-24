/**
 * Name: Jacob Hawley
 * File: server.js
 * Description: Project 4 - Express server utilizing environment variables and serving static frontend files.
 */

// Import the express module so we can use its framework features
const express = require('express');

// Initialize our express application
const app = express();

// Middleware to parse incoming JSON payloads for POST requests
app.use(express.json());

// Serve static frontend files (index.html, CSS, JS) from the current directory
app.use(express.static(__dirname));

// Simple request-logging middleware for tracking requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

// Define our port number (uses Render's environment port when deployed, or 3000 locally)
const PORT = process.env.PORT || 3000;

// Grab the GREETING environment variable, or use a default local fallback message
const greeting = process.env.GREETING || 'Hello from your deployed app!';

// ==========================================================
// Custom GET Endpoint for Environment Variable
// ==========================================================
app.get('/api/message', (req, res) => {
    res.json({ message: greeting });
});

// ==========================================================
// Required Project GET Endpoint (/api/items)
// ==========================================================
app.get('/api/items', (req, res) => {
    const sampleItems = [
        { id: 1, title: 'Item One: Cloud Deployment', body: 'Successfully deploying full-stack Express applications.' },
        { id: 2, title: 'Item Two: Environment Variables', body: 'Configuring dynamic settings via process.env seamlessly.' },
        { id: 3, title: 'Item Three: RESTful Routing', body: 'Handling JSON data through clean API endpoints.' },
        { id: 4, title: 'Item Four: Front-End Integration', body: 'Consuming live backend data directly inside our dashboard UI.' },
        { id: 5, title: 'Item Five: Production Ready', body: 'Ensuring robust error handling and loading indicators.' }
    ];
    res.json(sampleItems);
});

// ==========================================================
// Required Project POST Endpoint (/api/items)
// ==========================================================
app.post('/api/items', (req, res) => {
    const { title, body } = req.body;
    
    if (!title || !body) {
        return res.status(400).json({ error: 'Both title and body are required.' });
    }
    
    res.status(201).json({ message: 'Item created successfully!', item: { id: Date.now(), title, body } });
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