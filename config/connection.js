var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: "dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rb3xr6fgvh4uqxmr",
    password: "ng9ph002h93c0lr7",
    database: "azr3mpsnoph3txnf"
});

connection.connect();

module.exports = connection;