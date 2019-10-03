var mysql = require('mysql');
var conn = mysql.createConnection({
    database: 'mytestdb',
    host: 'localhost',
    user: 'root',
    password: '12345',
});


conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});