var mysql = require('mysql');

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { Console } = require('console');
const port = process.env.PORT || 5000;

var data = fs.readFileSync('../database.json');
var connectionString = JSON.parse(data);
var connection = mysql.createConnection({
   "host": connectionString.host,
   "user": connectionString.user,
   "password": connectionString.password,
   "port": connectionString.port,
   "database": connectionString.database
});
connection.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express'});
});

app.get('/api/customers', (req, res) => {
  console.log("aa");
  connection.query(
     "select * from CUSTOMER",
     (err, rows, fields) => {
        console.log(rows);
           res.send(rows);
      }
   );
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));