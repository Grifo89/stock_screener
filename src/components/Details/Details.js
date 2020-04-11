import React from 'react'
import timeSeriesWithDate from '../../charts/timeSeriesDraw'
import './Details.css'
import currencyFormat from '../../helpers/currencyFormat'


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(){
    this.props.requestHistData("params")
    this.props.requestQuoteData("params")
    const data = JSON.parse(localStorage.getItem("data"))
    if (data) {
      timeSeriesWithDate(this.myRef.current, data)
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.data !== undefined && this.props.data !== prevProps) {

    }
  }

  render(){
    const {
      hist,
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
      timestamp
    } = this.props

    return (
      <div>
      <h1>{symbol}</h1>
      <div className="details-container">
        <div className="details-info">
          <h1>{name}</h1>
          <span>Change</span>
          <span>{}</span>
          <div>
            <div className="row">
              <p className="label">Price:</p>
              <p>${price}</p>
            </div>
            <div className="row">
              <p className="label">Day Low:</p>
              <p>${dayLow}</p>
            </div>
            <div className="row">
              <p className="label">Day High:</p>
              <p>${dayHigh}</p>
            </div>
            <div className="row">
              <p className="label">Year Low:</p>
              <p>${yearLow}</p>
            </div>
            <div className="row">
            <p className="label">Year High:</p>
            <p>${yearHigh}</p>
            </div>
            <div className="row">
              <p className="label">marketCap:</p>
              <p>${currencyFormat(marketCap)}</p>
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
              <p>${open}</p>
            </div>
            <div className="row">
              <p className="label">Previous Close:</p>
              <p>${previousClose}</p>
            </div>
            <div className="row">
              <p className="label">Earnings Announcement:</p>
              <p>{earningsAnnouncement}</p>
            </div>
          </div>
        </div>
        <div className="details-graph">
          <div ref={this.myRef}></div>
        </div>
      </div>
      </div>
    )
  }
}

export default Details
