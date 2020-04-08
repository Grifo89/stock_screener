import React from 'react';
import './App.css';
import { BarChart } from '../'

class App extends React.Component {

componentDidMount(){
  this.props.requestData("params")
}

  render(){
    console.log(this.props);
    // return this.props.hist ? <div> Received Data </div> : <div> Requesting Data </div>
    return (
      <BarChart/>
    )
  }
}

export default App;
