var mysql = require('mysql');
const fs = require('fs');

const router = require('express').Router();
const fDbwriterBean = require('./fDbwriterBean');

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

router.post('/InsertFacilityHistory2', (req, res) => {

    connection = mysql.createConnection(db_info);
    console.log('InsertFacilityHistory2');

   let fID = req.body.facilityID;
   let addDate = req.body.addDate;
   let name = req.body.name;
   let division = req.body.division;
   let userName = req.body.userName;
   let workPart = req.body.workPart;
   let workUser = req.body.workUser;
   let startDate = req.body.startDate;
   let endDate = req.body.endDate;
   let etc = req.body.etc;

   let query = fDbwriterBean.InsertFacilityHistory2(fID, addDate, name, division,
    userName, workPart, workUser, startDate, endDate, etc);
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

router.get('/GetFacilityHistory2', (req, res) => {
    connection = mysql.createConnection(db_info);
    console.log('GetFacilityHistory2');
    let code1 = req.body.code1;
    let code2 = req.body.code2;
    let code3 = req.body.code3;
    let seq = req.body.seq;
 
    let query = fDbreaderBean.GetFacilityHistory2(code1, code2, code3, seq);
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

 router.get('/GetFacilityHistory3', (req, res) => {
    connection = mysql.createConnection(db_info);
    console.log('GetFacilityHistory3');
    let id = req.body.id;
    let startdate1 = req.body.startdate1;
    let startdate2 = req.body.startdate2;
    let workpart = req.body.workpart;
 
    let query = fDbreaderBean.GetFacilityHistory3(id, startdate1, startdate2, workpart);
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

 router.get('/GetFacilitySpec', (req, res) => {
    connection = mysql.createConnection(db_info);
    console.log('GetFacilitySpec');
    let id = req.body.id;
    let type = req.body.type;
    
    let query = fDbreaderBean.GetFacilitySpec(id, type);
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