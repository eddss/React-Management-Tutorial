import logo from './logo.svg';
import Login from './Components/Login';
import Main from './Components/Main';
import { useState } from 'react';

function App() {
  let [loginid, setLoginID] = useState('');
  let [pw, setPassword] = useState('');

  const getLogin = (userInfo, id, password) => {
    console.log(userInfo);
    console.log(id);
    console.log(password);
    if(userInfo !== []) {
      if(userInfo[0].PWD === password) {
        setLoginID(id);
        setPassword(password);
      }
    }
  }
  
  alert(loginid);
  if(loginid === '') {
    return (
      <>
        <Login getLogin={getLogin}></Login>
      </>
    );
  } else {
    return (
      <>
        <Main></Main>
      </>
    );
  }
}

export default App;
