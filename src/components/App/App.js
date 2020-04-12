import React from 'react';
import './App.css';
import {Details, Screener}  from '../../containers'
import NavBar from '../NavBar/NavBar'


class App extends React.Component {

componentDidMount(){

}

  render(){
    return (
      <div>
        <NavBar/>
        <Screener/>
      </div>
    )
  }
}

export default App;
