const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express'});
});

app.get('/api/customers', (req, res) => {
  console.log("aa");
    res.send([
      {
         "id":"1",
         "image":"http://www.newscj.com/news/photo/201001/31870_28928_182.jpg",
         "name":"홍길동",
         "birth":"961122",
         "gender":"남",
         "job":"도둑"
      },
      {
         "id":"2",
         "image":"https://inthestatus.com/jkwp/wp-content/uploads/2020/04/%EA%B3%A0%EA%B8%B8%EB%8F%99_6120200415092553.jpg",
         "name":"고길동",
         "birth":"710304",
         "gender":"남",
         "job":"모름"
      },
      {
         "id":"3",
         "image":"https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=201001131408300020936dgame_1.jpg",
         "name":"손오공",
         "birth":"850613",
         "gender":"남",
         "job":"무직"
      }
   ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));