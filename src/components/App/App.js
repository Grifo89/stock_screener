import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Details, Screener } from '../../containers';
import NavBar from '../NavBar/NavBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
    };
    this.changeSymbol = this.changeSymbol.bind(this);
  }

  changeSymbol(symbol) {
    this.setState({
      symbol,
    });
  }

  render() {
    const { symbol } = this.state;
    return (
      <div>
        <NavBar
          symbol={this.changeSymbol}
        />
        <Switch>
          <Route exact path="/" component={() => <Screener symbol={this.changeSymbol} />} />
          <Route path="/details/:ticket" component={() => <Details request={symbol} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
