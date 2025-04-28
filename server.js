// Simple Express server to handle survey data
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

// Data file path
const dataFilePath = path.join(__dirname, 'survey_data.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
}

// Get all survey responses
app.get('/api/responses', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        res.json(data);
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).json({ error: 'Failed to retrieve survey data' });
    }
});

// Add a new survey response
app.post('/api/responses', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        const newResponse = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            data: req.body
        };
        
        console.log('Menerima data survei baru:', newResponse);
        data.push(newResponse);
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
        
        res.status(201).json(newResponse);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save survey data' });
    }
});

// Delete all survey responses
app.delete('/api/responses', (req, res) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify([]));
        res.json({ message: 'All survey data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ error: 'Failed to delete survey data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Admin panel available at http://localhost:${PORT}/admin.html`);
});