import React, { useEffect, useState } from 'react';
import './App.css';

function MyCommunication(props) {
  var [myJSON, setmyJSON] = useState({results:[]});

  useEffect(function(){
    fetch("https://api.randomuser.me?results=10")
    .then((result)=>{
      return result.json();
    })
    .then((json)=>{
      console.log(json);
      setmyJSON(json);
    });
    return ()=>{
      console.log('#Life','useEffect실행==>컴포넌트 언마운트');
    }
  },[]);
  let trTag = [];
  for (let i = 0; i < myJSON.results.length; i++) {
    let data = myJSON.results[i];
    trTag.push(
      <tr key={data.login.md5}>
        <td><img src={data.picture.thumbnail} alt='{data.login.username}' /></td>
        <td><a href='/' onClick={(e)=>{
          e.preventDefault();
          props.onProfile(data);
        }}>{data.login.username}</a>
        </td>
        <td>{data.name.title} {data.name.first} {data.name.last} </td>
        <td>{data.nat}</td>
        <td>{data.email}</td>
      </tr>
    );
  }
  return (
    <div>
      <table border='1'>
        <thead>
          <tr>
            <td>사진</td>
            <td>로그인</td>
            <td>이름</td>
            <td>국가</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>{trTag}</tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>React - 외부서버통신</h2>
      <MyCommunication onProfile={(sData)=>{
        console.log(sData);
        let info = `전화번호:${sData.cell}
        성별:${sData.gender}
        username:${sData.login.username}
        password:${sData.login.password}`;
        alert(info);
      }}></MyCommunication>
    </div>
  );
}

export default App
