import React from 'react'
import * as d3 from 'd3'
import timeSeriesWithDate from '../../charts/timeSeriesDraw'
import './Details.css'

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(){
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
    return (
      <div className="deails-container">
        <h1>{this.props.symbol}</h1>
        <div ref={this.myRef}></div>
      </div>
    )
  }
}

export default Details
