import React from 'react';
/**
  동적으로 데이터 추가하기 map 사용하기
 */

function Food({name, number}){
  return (
    <div>
      <h3>{number}</h3>
      <h3>I Like {name}</h3>
    </div>
  )
}
// foodILike를 array로 가져오고 food를 이름과 렌더링하기 : map을 사용.
/*
 map은 array의 각 item에서 function을 실행하는 array를 ㅏ진 jacascript function
 그 function의 result를 갖는 array 를 다시 반환
 이 때 주의사항
 보통 화살표 함수를 사용할 때 () => {} 중괄호를 사용하지만
 React에서는 {} 를 사용하면 안에 return 이 있어야 한다 
 그래서 중괄호 대신 ()를 사용하자.


 이름.map((current) => (실행할 함수;))

*/
const foodILike = [
  {
   name: "kimchi",
   number: 1 
  },
  {
    name: "cake",
    number: 2 
   },
   {
    name: "ramyoen",
    number: 3 
   }
]



function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} number={dish.number} />
      ))}
    </div>
  );
}

export default App;
