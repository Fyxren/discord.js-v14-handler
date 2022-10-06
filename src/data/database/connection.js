const { createConnection } = require('mysql2');

const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD
});

connection.connect((err) => {
    if (err) {
        console.log(`MySQL Error - ${err}`);
    } else {
        console.log(`MySQL - Connected to ${connection.config.database}`);
    }
});

module.exports = { connection };