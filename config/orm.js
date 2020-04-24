const connection = require('./connection');

const orm = {

    all: function(table, cb) {

        let query = "SELECT * FROM " + table;

        connection.query(query, function(err, result) {
            if (err) throw err;            
            cb(result);
        });
    },

    create: function(table, cols, vals, cb) {

        let query = "INSERT INTO " + table;
        query += " (" + cols.toString() + ") ";
        query += "VALUES (" + printQs(vals.length) + ")";
        // console.log(query);

        connection.query(query, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    update: function(table, vals, condition, cb) {

        let query = "UPDATE " + table;
        query += " SET " + makeSQL(vals);
        query += " WHERE " + condition;
        // console.log(query);

        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Creates and returns a collection of question marks to match the number of values provided in CREATE
function printQs(num) {
    const Qs = [];

    for (let i = 0; i < num; i++) {
        Qs.push("?");
    }
    return Qs.toString();
}

// Converts raw data into an SQL query string with proper syntax 
function makeSQL(obj) {
    const SQL = [];

    for (const key in obj) {
        SQL.push( key + "=" + obj[key] );
    }
    return SQL.toString();
}  

module.exports = orm;