import React, {Component} from 'react'
import currencyFormat from '../../helpers/currencyFormat'
import './Screener.css'

class Screener extends Component {
  constructor(props){
    super(props)
    this.state = {
      screener: []
    }
  }

  componentDidMount(){
    this.props.requestScreenerData("params")
    this.setState({
      screener: this.props.screener
    })
  }

  render(){
    const { screener } = this.props
    let sectors = ["Technology", "Financial Services", "Healthcare",
                "Consumer Defensive", "Energy", "Industrials", "Basic Materials",
                "Consumer Cyclical", "Real Estate"]
    let companiesAll = []
    const filterSector = (sector, data) => {
      let companies = data.filter(d => d.sector === sector).map(comp => {
        return(
          <li key={comp.symbol} className="company">
            <div className="left">
              <h2>{comp.symbol}</h2>
              <p>{comp.companyName}</p>
            </div>
            <div className="right">
              <p>${currencyFormat(comp.price)}</p>
              <p>{comp.sector}</p>
            </div>
          </li>
        )
      })
      return {sector, companies}
    }

    if (screener !== undefined && screener.length !== 0) {
      sectors.map(sector =>  {
        let obj = filterSector(sector, screener)
        companiesAll.push(obj)
        return null
      })
    }

    const screenSector = companiesAll.map(sector => (
      <div key={sector.sector}>
        <h1>{sector.sector}</h1>
        <ul>{sector.companies}</ul>
      </div>
    ))
    return (
      <div>
        <h1>Stock Screener</h1>
        <div className="screener-main">{screenSector}</div>
      </div>
    )
  }
}

export default Screener
