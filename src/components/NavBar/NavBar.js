import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(event){
    this.setState({
      input: event.target.value
    })
  }

  render(){
    console.log(this.state.input);
    return(
      <div className="topnav">
        <a className="logo" href="#home">Stock Screener!</a>
        <div className="search-container">
          <form action="/action_page.php">
            <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={this.handleOnChange}
            />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    )
  }
}

export default NavBar
