var mysql = require('mysql');
var express = require ('express')

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
       
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burger_db'
    });
}
connection.connect();


module.exports = connection;