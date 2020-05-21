import React from 'react';
import PropTypes from 'prop-types';
/**
  props type을 활용하여
  데이터의 타입 확인하기 or 데이터 타입이 맞게 들어왔나 확인가능

  npm i prop-types

  사용하기 위해 import PropTypes from 'prop-types'; 
  선언  
  
  에러가 났다면 npm install 을 해라. 
 */

function Food({name, number, rating}){
  return (
    <div>
      <h3>{number}</h3>
      <h3>I Like {name}</h3>
    </div>
  )
}
/*
 props type을 활용하여 데이터 타입이 맞게 들어왔나 확인가능
 props의 타입을 선언하면 확인해준다

Array, boolean, function, number, object, string, symbol,
node, element, instanceof, Oneof ...etc


*/
Food.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired 
}


const foodILike = [
  {
   name: "kimchi",
   number: 1 ,
   rating : 3,
   key: 1
  },
  {
    name: "cake",
    number: 2 ,
    rating : 10,
    key: 2
   },
   {
    name: "ramyoen",
    number: 3 ,
    rating : 15,
    key: 3
   }
]


/*
Food.propTypes = { 내가 얻고 싶은 props에 대한 설명}
*/
Food.propTypes = {

}

function App() {
  return (
    <div>
     {foodILike.map(dish => (
     <Food
          key={dish.key}  
          name={dish.name} 
          number={dish.number} 
          rating={dish.rating} />))} 
         
    </div>
  );
}

export default App;
