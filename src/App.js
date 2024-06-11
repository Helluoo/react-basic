import logo from './logo.svg';
import './App.css';
import BtnEventComponent from './components/BtnEventComponent';
import React, { useState } from 'react';
import KakaoMap from './components/ClassKakaoMap';
import { Link } from 'react-router-dom';

function App() {
  //함수형 컴포넌트에서는 클래스의 state 예약변수 대신 useState함수로 변수 초기화(아래) 
  const [state, setState] = useState({ count: 10 });
  const resetEvent = () => { //기존 값+10으로 리셋하기 
    //state 변경 let count = state.count; 
    setState(prevState => ({
      count: prevState.count + 10,
    }));
  }
  return (
    <div className="App">
      {/* <KakaoMap/> */}
      {/* <BtnEventComponent nodeValue={<h1>태그 노드</h1>}
        count={state.count}
        >
        <h2>자식노드 추가</h2>
      </BtnEventComponent>
      <button onClick={resetEvent}>{state.count + 10}으로 초기화</button> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>HTML태그 자바스크립트에서 바로사용에서 살아남기</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={"/classKakaoMap"}>
          <button id='btnHome'>클래스형</button>
        </Link>
      </header>
    </div>
  );
}

export default App;
