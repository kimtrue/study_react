import React from 'react';
/*
render를 하면 호출되는 
Life cycle method는?
ComponentDidmount
 */
class App extends React.Component {
  //미래에 사용할 state를 선언하는건 필수가 아니다
 state = {
   isLoading: true,
   movie: []
 }

 componentDidMount(){
   setTimeout(() => {
     this.setState({isLoading: false})
   }, 6000);
 }
render(){
  //ES6 문법
  const {isLoading} = this.state;
  return (
    // <div>{this.state.isLoading ? "Loading" : "We are Ready"}</div>
    <div>{isLoading ? "Loading..." : "We are Ready"}</div>
    )
  }


}

      


export default App;
