import React from 'react';
import './App.css';
import { Details } from '../'

class App extends React.Component {

componentDidMount(){
  this.props.requestData("params")
}

  render(){
    // return this.props.hist ? <div> Received Data </div> : <div> Requesting Data </div>
    return (
      <Details
        data={this.props.hist}
        symbol={this.props.symbol}
      />
    )
  }
}

export default App;
