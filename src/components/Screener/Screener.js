/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import currencyFormat from '../../helpers/currencyFormat';
import './Screener.css';
import { Data } from './dummyData';

class Screener extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { requestScreenerData } = this.props;
    requestScreenerData();
  }

  handleClick(symbolString) {
    const { symbol } = this.props;
    symbol(symbolString);
  }

  render() {
    const { screener } = this.props;
    const sectors = ['Technology', 'Financial Services', 'Healthcare',
      'Consumer Defensive', 'Energy', 'Industrials', 'Basic Materials',
      'Consumer Cyclical', 'Real Estate'];
    const companiesAll = [];
    const filterSector = (sector, data) => {
      const companies = data.filter(d => d.sector === sector).map(comp => (
        <Link to={`/details/${comp.symbol}`} key={comp.symbol} className="company-link">
          <li className="company" onClick={() => this.handleClick(comp.symbol)}>
            <div className="left">
              <h2>{comp.symbol}</h2>
              <p>{comp.companyName}</p>
            </div>
            <div className="right">
              <p>
                $
                {currencyFormat(comp.price)}
              </p>
              <p>{comp.sector}</p>
            </div>
          </li>
        </Link>
      ));
      return { sector, companies };
    };

    // console.log(screener);
    if (screener.length !== 0 && screener.length !== 0) {
      sectors.map(sector => {
        const obj = filterSector(sector, screener);
        companiesAll.push(obj);
        return null;
      });
    } else {
      sectors.map(sector => {
        const obj = filterSector(sector, Data);
        companiesAll.push(obj);
        return null;
      });
    }

    const screenSector = companiesAll.map(sector => (
      <div key={sector.sector} className="screener-sector">
        <h1>{sector.sector}</h1>
        <ul>{sector.companies}</ul>
      </div>
    ));

    return (
      <div>
        <h1 className="screener-title">Stock Screener</h1>
        <div className="screener-main">{screenSector}</div>
      </div>
    );
  }
}

Screener.propTypes = {
  requestScreenerData: PropTypes.func,
  symbol: PropTypes.func,
};

Screener.defaultProps = {
  screener: []
}

export default Screener;
