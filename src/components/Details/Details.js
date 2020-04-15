import React from 'react';
import PropTypes from 'prop-types';
import timeSeriesWithDate from '../../charts/timeSeriesDraw';
import './Details.css';
import currencyFormat from '../../helpers/currencyFormat';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const { request, requestHistData, requestQuoteData } = this.props;
    if (request) {
      requestHistData(request.toUpperCase());
      requestQuoteData(request.toUpperCase());
    }
  }

  componentDidUpdate() {
    const { request, fetching, hist } = this.props;
    if (fetching !== undefined && fetching !== true) {
      const obj = { symbol: request.toUpperCase(), historical: hist };
      timeSeriesWithDate(this.myRef.current, obj);
    }
  }

  render() {
    const {
      symbol,
      name,
      price,
      change,
      dayLow,
      dayHigh,
      yearLow,
      yearHigh,
      marketCap,
      volume,
      exchange,
      open,
      previousClose,
      earningsAnnouncement,
    } = this.props;
    return (
      <div className="details-main-container">
        <h1 className="details-title">{symbol}</h1>
        <div className="details-container">
          <div className="details-info">
            <div className="details-info-title">
              <h1>{name}</h1>
              <span>
                {change >= 0 ? <i className="fas fa-arrow-up" style={{ color: 'green', fontSize: '2em' }} />
                  : <i className="fas fa-arrow-down" style={{ color: 'red', fontSize: '2em' }} />}
              </span>
            </div>
            <div>
              <div className="row">
                <p className="label">Price:</p>
                <p>
                  $
                  {price}
                </p>
              </div>
              <div className="row">
                <p className="label">Day Low:</p>
                <p>
                  $
                  {dayLow}
                </p>
              </div>
              <div className="row">
                <p className="label">Day High:</p>
                <p>
                  $
                  {dayHigh}
                </p>
              </div>
              <div className="row">
                <p className="label">Year Low:</p>
                <p>
                  $
                  {yearLow}
                </p>
              </div>
              <div className="row">
                <p className="label">Year High:</p>
                <p>
                  $
                  {yearHigh}
                </p>
              </div>
              <div className="row">
                <p className="label">marketCap:</p>
                <p>
                  $
                  {currencyFormat(marketCap)}
                </p>
              </div>
              <div className="row">
                <p className="label">Volume:</p>
                <p>{volume}</p>
              </div>
              <div className="row">
                <p className="label">Exchange:</p>
                <p>{exchange}</p>
              </div>
              <div className="row">
                <p className="label">Open:</p>
                <p>
                  $
                  {open}
                </p>
              </div>
              <div className="row">
                <p className="label">Previous Close:</p>
                <p>
                  $
                  {previousClose}
                </p>
              </div>
              <div className="row">
                <p className="label">Earnings Announcement:</p>
                <p>{earningsAnnouncement}</p>
              </div>
            </div>
          </div>
          <div className="details-graph">
            <div ref={this.myRef} />
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  requestQuoteData: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  open: PropTypes.number,
  request: PropTypes.string,
  requestHistData: PropTypes.func.isRequired,
  hist: PropTypes.arrayOf.isRequired,
  symbol: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  change: PropTypes.number,
  dayLow: PropTypes.number,
  dayHigh: PropTypes.number,
  yearLow: PropTypes.number,
  yearHigh: PropTypes.number,
  marketCap: PropTypes.number,
  volume: PropTypes.number,
  exchange: PropTypes.string,
  previousClose: PropTypes.number,
  earningsAnnouncement: PropTypes.number,
};

Details.defaultProps = {
  open: 0,
  request: '',
  symbol: '',
  name: '',
  price: 0,
  change: 0,
  dayLow: 0,
  dayHigh: 0,
  yearLow: 0,
  yearHigh: 0,
  marketCap: 0,
  volume: 0,
  exchange: '',
  previousClose: 0,
  earningsAnnouncement: 0,
}

export default Details;
