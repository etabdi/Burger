var connection = require('../config/connection.js');


var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM burger";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burger (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        var queryString = "UPDATE burger SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;