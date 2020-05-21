import React from 'react';

//component = HTML을 반환하는 함수
//JSX = Javascript + Html
/*
from father to children
how to send data

props를 사용해 data 보내보기
*/

function Food({fav}){
  /*
  function Food(props){
  App() 컨포넌트 Food()에 prop.fav 를 선언해주었다
  props fav="kimchi"를 선언  props.fav = { fav } 
  라고 사용할 수 있음. es6문법
  */
  return (
    <div>
    <h3>I Like {fav}</h3>

    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samgyopsal"/>
      <Food fav="cake"/>
      <Food fav="chukumi"/>
    </div>
  );
}

export default App;
