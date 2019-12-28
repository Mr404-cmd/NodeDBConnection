const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "shubham",
  password: "shubham",
  database: "shubham",
  port: 3307
});
mysqlConnection.connect(err => {
  if (!err) {
    console.log("DB connected successfully-");
  } else {
    console.log("DB does not connected: " + JSON.stringify(err));
  }
  var sql =
    "INSERT INTO employee (emp_id,emp_name,emp_add,emp_mobile) VALUES (1,'shubham','emp_add','emp_mobile')";
  mysqlConnection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
