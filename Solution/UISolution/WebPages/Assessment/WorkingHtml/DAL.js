var mysql = require('mysql2');

var server = {

    host:"localhost",
    user:"root",
    password:"password",
    database:"tap"
};


var connection = mysql.createConnection(server);

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

connection.query('SELECT * FROM emp', function (error, results, fields) {
    if (error) {
        console.error('Error executing query: ');
        return;
    }
    console.log('Results: ', results);
}
);  