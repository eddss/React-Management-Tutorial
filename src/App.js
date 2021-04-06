import React, { Component } from 'react';
import './App.css';
import Customer from './Components/Customer';

const customers = [{
  id: "1",
  image: "http://www.newscj.com/news/photo/201001/31870_28928_182.jpg",
  name: "홍길동",
  birth: "961122",
  gender: "남",
  job : "도둑",
},
{
  id: "2",
  image: "https://inthestatus.com/jkwp/wp-content/uploads/2020/04/%EA%B3%A0%EA%B8%B8%EB%8F%99_6120200415092553.jpg",
  name: "고길동",
  birth: "710304",
  gender: "남",
  job : "모름",
},
{
  id: "3",
  image: "https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=201001131408300020936dgame_1.jpg",
  name: "손오공",
  birth: "850613",
  gender: "남",
  job : "무직",
}]


function App() {
  return (
    <div>
      {customers.map(customer=>{
        return(
          <Customer 
            key={customer.id} 
            id={customer.id} 
            image={customer.image} 
            name={customer.name} 
            birth={customer.birth} 
            gender={customer.gender} 
            job={customer.job}
          >
          </Customer>
        );
      })}
      
    </div>
  );
}

export default App;
