const mysql = require("mysql");
const databasename = "sql4453467";

var pool = mysql.createPool({
  connectionLimit: 100,
  host: "sql4.freemysqlhosting.net",
  user: "sql4453467",
  password: "mCxNDHiSdz",
  database: "sql4453467",
  debug: true
});

function executeQuery(query, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      return callback(err, null);
    } else if (connection) {
      connection.query(query, function (err, rows, fields) {
        connection.release();
        if (err) {
          return callback(err, null);
        }
        return callback(null, rows);
      });
    } else {
      return callback(true, "No Connection");
    }
  });
}

function getResult(query, callback) {
  executeQuery(query, function (err, rows) {
    if (!err) {
      callback(null, rows);
    } else {
      callback(true, err);
    }
  });
}

module.exports = {
  getResult
};
