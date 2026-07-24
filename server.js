/**
 * Name: Jacob Hawley
 * File: server.js
 * Description: Express server with root, GET, and POST endpoints for deployment practices.
 */

const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const greeting = process.env.GREETING || 'Hello from your deployed app!';

// Root route to prevent "Cannot GET /" error
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Express API server! Use /api/message or /api/notes' });
});

// Custom GET Endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: greeting });
});

// Custom POST Endpoint
app.post('/api/notes', (req, res) => {
    const { name, note } = req.body;
    
    if (!name || !note) {
        return res.status(400).json({ error: 'Both name and note are required.' });
    }
    
    res.status(201).json({ message: 'Note received!', data: { name, note } });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});