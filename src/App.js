import React from 'react';
/**
  data를 fetching 해보자
 */

/*


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
