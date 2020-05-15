import React from 'react';
import PropTypes from 'prop-types';
/**
  state에 대해 알아보자
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
