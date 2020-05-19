import React from 'react';
/**
  state에 대해 알아보자
 */

/*
  Life cycle method 
  Mounting 
   - constructor() javascript에서 class를 호출할 때 불러온,,
   - static getDerivedStateFromProps()
   - render()
   - 
  Updating 
   - componuntDidUpdate()  

  Unmounting
  -componentWillUnmount


  
 */
class App extends React.Component {
  constructor(props){
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0
  }
 
 add = () => {
   this.setState(current => ({count: current.count + 1}));
 };
 minus = () => {
  this.setState(current => ({count: current.count -1}));
 };
componentDidMount(){
  console.log("component didmount");
}
componentDidUpdate(){
  console.log("component Did update");
}
componentWillUnmount(){
  console.log("Bye bye");
}
render(){
    console.log("I'm rendering");
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
