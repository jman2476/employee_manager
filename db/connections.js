const mysql = require('mysql2')

// create connection for company database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_management_db'
})

module.exports = db.promise()