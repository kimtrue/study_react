import React from 'react';
/*
 data 에 fetch하기
 */
class App extends React.Component {
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
  const {isLoading} = this.state;
  return (
    <div>{isLoading ? "Loading..." : "We are Ready"}</div>
    )
  }


}

      


export default App;
