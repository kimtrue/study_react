import React from 'react';
import PropTypes from 'prop-types';
/**
  state에 대해 알아보자
 */

/*
 classs component

 function이 아니기때문에 return이 없다
 render가 있다. 스크린에 표시

 리액트는 자동적으로 클래스 컨포넌트의 
 렌더 메서드를 실행하려고 한다

 state는 Object로 component의 data를 넣는
 공간이 있고 이것은 가변한다.

 react는 render function을 refresh하지 않는다.
 
 this.state.count X 
 this.setState({count: 1})
 
 setState를 호출하면 
 새로운 state와 render function을 호출 
 */
class App extends React.Component {
  state = {
    count: 0
  }
 //add를 위한 javascript
 //state를 사용하는 것은 권장하지 않는다
 add = () => {
  //  this.setState({count: this.state.count + 1});
   this.setState(current => ({count: current.count + 1}));
 };
 minus = () => {
  this.setState(current => ({count: current.count -1}));
 };

  render(){
    return (
    <div>
      <h1>The number is {this.state.count}</h1>

      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
    </div>
    )
  }

}

      


export default App;
