var mysql = require('mysql');
const fs = require('fs');

const router = require('express').Router();
const dbreaderBean = require('./dbreaderBean');

const data = fs.readFileSync('./database.json');
const connectionString = JSON.parse(data);
const db_info = {
   "host": connectionString.host,
   "user": connectionString.user,
   "password": connectionString.password,
   "port": connectionString.port,
   "database": connectionString.database
};
var connection; 

router.get('/GetUserParametersEx', (req, res) => {
   console.log('GetUserParametersEx');
   connection = mysql.createConnection(db_info);
   let name = req.body.name;
   let query = dbreaderBean.GetUserParametersEx(name);
   console.log(query);
   if(query === '') {
   res.send('');
   } else {
   connection.query(
      query,
         (err, rows, fields) => {
            console.log(err);
            console.log(rows);
               res.send(rows);
         }
      );
   }

   connection.end();
});

module.exports = router;