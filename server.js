const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Static file serving
app.use(express.static(__dirname));

// Default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Admin route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// --- API Endpoints ---

// Get CMS Data
app.get('/api/data', (req, res) => {
    try {
        if (fs.existsSync('data.json')) {
            const data = fs.readFileSync('data.json', 'utf8');
            res.json(JSON.parse(data));
        } else {
            res.json(null);
        }
    } catch (err) {
        console.error('Error reading data.json:', err);
        res.status(500).json({ error: 'Failed to read data' });
    }
});

// Save CMS Data
app.post('/api/data', (req, res) => {
    try {
        fs.writeFileSync('data.json', JSON.stringify(req.body, null, 4));
        res.json({ success: true });
    } catch (err) {
        console.error('Error writing data.json:', err);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

// Get Leads
app.get('/api/leads', (req, res) => {
    try {
        if (fs.existsSync('leads.json')) {
            const leads = fs.readFileSync('leads.json', 'utf8');
            res.json(JSON.parse(leads));
        } else {
            res.json([]);
        }
    } catch (err) {
        console.error('Error reading leads.json:', err);
        res.status(500).json({ error: 'Failed to read leads' });
    }
});

// Save Leads
app.post('/api/leads', (req, res) => {
    try {
        fs.writeFileSync('leads.json', JSON.stringify(req.body, null, 4));
        res.json({ success: true });
    } catch (err) {
        console.error('Error writing leads.json:', err);
        res.status(500).json({ error: 'Failed to save leads' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n=========================================`);
    console.log(`🚀 DUIT Server running at: http://localhost:${PORT}`);
    console.log(`🔧 Admin Panel running at: http://localhost:${PORT}/admin`);
    console.log(`=========================================\n`);
});
