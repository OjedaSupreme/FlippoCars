const mysql = require('mysql2');

// Create the connection pool
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Megaorto1',
    database: 'prueba',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the connection
connection.getConnection((err, conn) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Database connected successfully');
    conn.release();
});

// Export the promise-based version of the pool
module.exports = connection.promise();
 


