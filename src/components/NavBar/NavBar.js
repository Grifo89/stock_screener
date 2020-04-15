import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleClick() {
    const { symbol } = this.props;
    const { input } = this.state;
    symbol(input);
    this.setState({
      input: '',
    });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="topnav">
        <Link className="logo" to="/">Stock Screener!</Link>
        <div className="search-container">
          <form action="/action_page.php">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onChange={this.handleOnChange}
              value={input}
              className="searchTerm"
            />
            <Link to={`/details/${input.toUpperCase()}`}>
              <button
                type="submit"
                onClick={this.handleClick}
                className="searchButton"
              >
                <i className="fa fa-search" />
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  symbol: PropTypes.func.isRequired,
};


export default NavBar;
