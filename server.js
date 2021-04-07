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

const multer = require('multer');
const upload = multer({dest:'../upload'});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express'});
});

app.get('/api/customers', (req, res) => {
  console.log("aa");
  connection.query(
     "select * from CUSTOMER WHERE USE_FLAG = 1",
     (err, rows, fields) => {
        console.log(rows);
           res.send(rows);
      }
   );
});

app.use('/image', express.static('../upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
   let sql = 'insert into CUSTOMER (ID, NAME, BIRTH, GENDER, JOB, IMAGE, USE_FLAG, CREATE_DATE) ' + 
   ' values ( IFNULL((select max(id) + 1 from CUSTOMER A), 1), ?, ?, ?, ?, ?, 1, NOW() )';
   let image = '/image/' + req.file.filename;
   let name = req.body.name;
   let birth = req.body.birth;
   let gender = req.body.gender;
   let job = req.body.job;
   let params = [name, birth, gender, job, image];
   console.log(params);

   connection.query(sql, params,(err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(rows);
      console.log(fields);
   })
});

app.delete('/api/customers/:id', (req, res) => {
   let sql = 'UPDATE CUSTOMER SET USE_FLAG = 0, DELETE_DATE = NOW() WHERE ID = ?';
   let params = [req.params.id];
   console.log(req.params.id);
   connection.query(sql, params,(err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(rows);
      console.log(fields);
   })

})

app.listen(port, ()=> console.log(`Listening on port ${port}`));