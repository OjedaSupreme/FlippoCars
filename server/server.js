const express = require('express');
const connection = require('./myconnection');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    res.redirect('/HTML/PaginaWeb.html');
});

app.get('/HTML/:page', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/HTML', req.params.page));
});

app.get('/css/:file', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, '../public/css', req.params.file));
});


app.post('/registrar', async (req, res) => {
    try {
        const { nombre, usuario, email, contraseña } = req.body;
        
        
        console.log('Received registration data:', req.body);

        const query = 'INSERT INTO usuarios (nombre, usuario, email, contraseña) VALUES (?, ?, ?, ?)';
        
        connection.query(query, [nombre, usuario, email, contraseña], (error, results) => {
            if (error) {
                console.error('Database error:', error);
                res.status(500).json({ error: 'Error en el registro' });
                return;
            }
            
            console.log('Registration successful:', results);
            res.status(200).json({ message: 'Registro exitoso' });
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


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
