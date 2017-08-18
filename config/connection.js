// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) { //if using JAWSDB on heroku, 
    connection = mysql.createConnection(process.env.JAWSDB_URL); //create connection with JAWSDB
    connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) { //query the connection
        if (err) throw err;
        console.log("The solution is: ", rows[0].solution);
    })
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burger_db"
    });





    // Export connection for our ORM to use.
    module.exports = connection;