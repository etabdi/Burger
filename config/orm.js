var connection = require('../config/connection.js');


var orm = {

    selectAll: function (DB) {
        var queryString = "SELECT * FROM burger";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            DB(result);
        });
    },

    insertOne: function (burger, DB) {
        var queryString = "INSERT INTO burger (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, result) {
            if (err) {
                throw err;
            }
            DB(result);
        });
    },

    updateOne: function (id, DB) {
        var queryString = "UPDATE burger SET devoured = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            DB(result);
        });
    }
};

module.exports = orm;