const express = require('express');
const connection = require('./myconnection');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Root route redirects to PaginaWeb.html
app.get('/', (req, res) => {
    res.redirect('/HTML/PaginaWeb.html');
});

// Handle HTML routes
app.get('/HTML/:page', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/HTML', req.params.page));
});

// Handle CSS routes
app.get('/css/:file', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, '../public/css', req.params.file));
});

// Add error handling
app.use((err, req, res, next) => {
    if (err.code === 'ENOENT') {
        console.log('File not found:', err.path);
        res.status(404).send('File not found');
    } else {
        next(err);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
